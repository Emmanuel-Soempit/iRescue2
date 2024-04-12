import { useLocation, Link } from "react-router-dom";
import React, { useState } from "react";
import openIcon from "../assets/images/openIcon.png";
import closeIcon from "../assets/images/closeIcon.png";
import phone from "../assets/images/phone.png";
import plus from "../assets/images/plus.png";
import batJump from "../assets/images/batJump.svg";
import flatTowing from "../assets/images/flatTowing.svg";
import punctures from "../assets/images/punctures.svg";
import carStarting from "../assets/images/carStarting.svg";
import parking from "../assets/images/parking.png";
import ambulance from "../assets/images/ambulance.png";
import LottieAnimation from "../components/lottieAnimation";
import phoneTrigger from "../phoneTrigger.json";
import "../stylings/header.css";

const Header = ({ logo, isFixed, linkColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const phoneNumber = "+2342013306046";

  const handlePhoneClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const location = useLocation();
  const navClass = isFixed ? "" : "unfixedNav";
  const linkClass = linkColor === "black" ? "blackLinks" : "";

  const services = [
    {
      image: batJump,
      title: "Battery Jupstart",
      info: "Get Jumpstart from Proffessionals",
    },
    {
      image: flatTowing,
      title: "Towing",
      info: "Anything from flatbeds to safelifting",
    },
    {
      image: punctures,
      title: "Flat Tyre",
      info: "Tube or Tubeless Puncture Repairs",
    },
    {
      image: carStarting,
      title: "Starting Problem",
      info: "Keep your vehicle moving",
    },
    {
      image: parking,
      title: "IreZone Spot",
      info: "Secure parking facilities are available nearby",
    },
    {
      image: ambulance,
      title: "ambulance",
      info: "Access ambulance services in your vicinity",
    },
  ];

  return (
    <nav className={`${navClass} ${linkClass}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={location.pathname === "/About" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li className="Servicesdropdown">
            <Link
              to="#"
              className={`plus ${
                location.pathname === "/Services" ? "active" : ""
              }`}
            >
              Services
              <img src={plus} />
            </Link>

            <ul className="ServicedropdownLink">
              {services.map((service, index) => {
                return (
                  <li key={index}>
                    <a href="#">
                      <img src={service.image} />
                      <div>
                        <h4>{service.title}</h4>
                        <p>{service.info}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link
              to="/subscription"
              className={location.pathname === "/subscription" ? "active" : ""}
            >
              Subscription
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className={location.pathname === "/Login" ? "active" : ""}
            >
              Login
            </Link>
          </li>
          <li className="register">
            <Link
              to="/Register"
              className={location.pathname === "/Register" ? "active" : ""}
            >
              Register
            </Link>
          </li>
        </ul>

        <div className="telephone" onClick={handlePhoneClick}>
          <a href="#">Call us now!</a>
          <div className="number">
            <LottieAnimation
              id="headerLottie"
              animationData={phoneTrigger}
              loop
              autoplay
              width="50px"
              height="50px"
            />
            <h3>01-3306046</h3>
          </div>
        </div>

        <div className="smallScreenIcon">
          {!isOpen && (
            <div className="toggle-button" onClick={toggleSidebar}>
              <img src={openIcon} className="hamburger_icon" />
            </div>
          )}
          {isOpen && (
            <div className="toggle-button" onClick={toggleSidebar}>
              <img src={closeIcon} className="closeIcon" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
