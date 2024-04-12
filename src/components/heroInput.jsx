import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import circle from "../assets/images/circle.png";
import arrow from "../assets/images/arrow.png";
import rectangle from "../assets/images/rectangle.png";
import Swal from "sweetalert2";
import AutocompleteInput from "./autoCompleteScript";
import { useGlobalState } from "./myContext";

export default function HeroInputElem({ handleSearchRoute }) {
  const navigate = useNavigate();
  const { updateLocation, updateDestination } = useGlobalState();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleLocationSelect = (address, coordinates) => {
    setSelectedLocation({ address, coordinates });
  };

  const handleDestinationSelect = (address, coordinates) => {
    setSelectedDestination({ address, coordinates });
  };

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      handleSearchRoute();
    }
  }, []);

  const towNow = () => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please Login to continue.",
        icon: "error",
      });
      navigate("/login");
    }
  };

  return (
    <>
      <Slide direction={"left"} cascades duration={2000} triggerOnce>
        <div className="inputElment">
          <AutocompleteInput
            placeholder="Enter Location"
            onSelect={handleLocationSelect}
          />
          <img src={circle} className="inputImg1" alt="Circle Icon" />
          <a href="#">
            <img src={arrow} className="inputImg2" alt="Arrow Icon" />
          </a>
        </div>

        <div className="inputElment">
          <AutocompleteInput
            placeholder="Enter Destination"
            onSelect={handleDestinationSelect}
          />
          <img src={rectangle} className="inputImg3" alt="Rectangle Icon" />
        </div>
      </Slide>

      <Slide direction={"right"} duration={2000}>
        <button onClick={towNow}>Tow Now</button>
      </Slide>
    </>
  );
}
