import ambulance from "../assets/images/ambulance.png";
import flatTowing from "../assets/images/flatTowing.svg";
import fireService from "../assets/images/fireService.svg";
import { useState } from "react";
import CarTowingService from "./carTowingService";
import MyModal from "./modal";
import Ambulance from "./ambulanceService";
import Mechanic from "./mechanic";
import FireService from "./fireService";
import parking from "../assets/images/parking.png";
import listedServices from "../assets/images/listedServices.png";
import police from "../assets/images/police.svg";

export default function Services() {
  const services = [
    {
      title: "Car Towing",
      image: flatTowing,
      info: "Anything from flatbed to safe lifting",
    },

    {
      title: "Irezone Spot ",
      image: parking,
      info: "Recommended Safe Parking zones ",
    },
    {
      title: "Ambulance",
      image: ambulance,
      info: "Anything from flatbed to safe lifting",
    },
    {
      title: "Fire Service ",
      image: fireService,
      info: "Anything from flatbed to safe lifting",
    },
    {
      title: "Police ",
      image: police,
      info: "Anything from flatbed to safe lifting",
    },
  ];
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMicroClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setIsModalOpen(false); // Close the modal
  };

  const renderSelectedComponent = () => {
    if (selectedService) {
      switch (selectedService.title) {
        case "Car Towing":
          return (
            <CarTowingService
              {...selectedService}
              setIsModalOpen={setIsModalOpen}
            />
          );
        case "Ambulance":
          return <Ambulance {...selectedService} />;
        case "Mechanic ":
          return <Mechanic {...selectedService} />;
        case "Fire Service":
          return <FireService {...selectedService} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <>
      <div className="vehicleServices">
        <div className="listedService">
          <img src={listedServices} alt="" />
          <h3>Our Listed Services</h3>
        </div>
        {services.map((service, index) => {
          return (
            <div
              className="micro"
              key={index}
              onClick={() => handleMicroClick(service)}
            >
              <img src={service.image} alt="" />
              <div className="microLogo">
                <h4>{service.title}</h4>
                <p>{service.info}</p>
              </div>
            </div>
          );
        })}
        <MyModal
          showModal={isModalOpen}
          setShowModal={setIsModalOpen}
          body={renderSelectedComponent()}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
}
