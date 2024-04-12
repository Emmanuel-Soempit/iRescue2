import towingServiceCar from "../assets/images/towingServiceCar.png";
import { Slide, Bounce, Fade } from "react-awesome-reveal";
import CarTowingTab from "../components/CarTowingTab";
import AmbulanceTab from "./AmbulanceTab";
import IrezoneTab from "./IrezoneTab";
import { useState } from "react";

export default function TowingServices() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const showTabContent = () => {
    return activeTab === 1 ? (
      <CarTowingTab />
    ) : activeTab === 2 ? (
      <AmbulanceTab />
    ) : activeTab === 3 ? (
      <IrezoneTab />
    ) : null;
  };

  return (
    <>
      <div className="grid">
        <div className="left">
          <Slide direction={"left"} cascade duration={1500}>
            <div className="leftTop">
              <p>Towing Services</p>
              <h3>Earn Money With iRescue</h3>
              <div className="leftImg">
                <img src={towingServiceCar} />
              </div>
            </div>
          </Slide>
        </div>

        <div className="right">
          <Slide direction={"right"} duration={1500}>
            <ul className="rightTop">
              <li
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "activeTab" : ""}
              >
                Car Towing
              </li>
              <li
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "activeTab" : ""}
              >
                Ambulance <span>Emergency</span>
              </li>

              <li
                onClick={() => handleTabClick(3)}
                className={activeTab === 3 ? "activeTab" : ""}
              >
                IRezone
              </li>
            </ul>
          </Slide>

          {showTabContent()}
        </div>
      </div>
    </>
  );
}
