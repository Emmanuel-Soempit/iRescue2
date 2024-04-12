import React, { useState } from "react";
import downAngle from "../assets/images/downAngle.svg";

function CarMake({
  carMakes,
  handleCarMakeClick,
  isLoadingMake,
  selectedCarMake,
  setSelectedCarMake,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (make) => {
    setSelectedCarMake(make);
    handleCarMakeClick(make);
    setIsOpen(false);
  };

  return (
    <>
      <div className="carMakeContainer">
        <h3>SELECT PREFERRED CAR MAKE</h3>
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {isLoadingMake ? (
              <div className="loader"></div>
            ) : (
              <>
                {selectedCarMake ? selectedCarMake.name : "Select Car Make"}
                <img
                  src={downAngle}
                  className={`arrow ${isOpen ? "up" : ""}`}
                />
              </>
            )}
          </div>
          {isOpen && (
            <ul className="dropdown-list">
              {carMakes.map((make) => (
                <li key={make.id} onClick={() => handleSelect(make)}>
                  {make.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default CarMake;
