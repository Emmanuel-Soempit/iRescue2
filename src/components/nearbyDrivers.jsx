import profileIcon from "../assets/images/profileIcon.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NearbyDrivers(selectedDriver, setSelectedDriver) {
  const [nearbyDrivers, setNearbyDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://trys.irescue.app/api/getNearbyDrivers"
        );

        setNearbyDrivers(response.data.drivers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDriverClick = (nearbyDriver) => {
    setSelectedDriver(nearbyDriver);
  };

  /* useEffect(() => {
    if (selectedDriver) {
      console.log(selectedDriver.fullname);
    }
  }, [selectedDriver]); */

  return (
    <>
      <div className="drivers">
        <h4>Choose your driver</h4>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            {nearbyDrivers.map((nearbyDriver) => {
              return (
                <div
                  className={`driver ${selectedDriver ? "selected" : ""}`}
                  key={nearbyDriver.id}
                  onClick={() => handleDriverClick(nearbyDriver)}
                >
                  <img src={nearbyDriver.image} alt="" />
                  <div className="driverInfo">
                    <p>{nearbyDriver.fullname}</p>
                    <p>10mins away</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
