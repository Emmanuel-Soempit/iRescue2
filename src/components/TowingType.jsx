import axios from "axios";
import { useState, useEffect } from "react";
import downAngle from "../assets/images/downAngle.svg";

export default function TowingType({ updateSelectedTowCar, selectedTowCar }) {
  const [towingTypes, setTowingTypes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTowType, setSelectedTowType] = useState("Select Car Make"); // Initialize selectedMake state with default value

  useEffect(() => {
    const fetchTowTypes = async () => {
      try {
        const response = await axios.get(
          "https://trys.irescue.ng/api/getTowType"
        );
        setTowingTypes(response.data.getTowing);
      } catch (error) {
        console.error("Error fetching tow types:", error);
      }
    };

    fetchTowTypes();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (towingType) => {
    updateSelectedTowCar(towingType);
    setSelectedTowType(towingType);
    setIsOpen(false);
  };

  return (
    <>
      <div className="towTypeContainer">
        <h3>SELECT TOW TYPE</h3>
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedTowCar !== null ? (
              <div className="towTypes">
                <h4>{selectedTowType.name}</h4>
                <img
                  src={`https://trys.irescue.app${selectedTowType.image}`}
                  alt=""
                />
                {/* <p>{selectedTowType.fixed_price}</p> */}
              </div>
            ) : (
              "Select Tow Type"
            )}

            <img src={downAngle} className={`arrow ${isOpen ? "up" : ""}`} />
          </div>
          {isOpen && (
            <ul className="dropdown-list">
              {towingTypes.map((towingType) => (
                <li
                  key={towingType.id}
                  onClick={() => handleSelect(towingType)}
                >
                  <div className="towTypes">
                    <h4>{towingType.name}</h4>
                    <img
                      src={`https://trys.irescue.app${towingType.image}`}
                      alt=""
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
