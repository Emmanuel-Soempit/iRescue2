import React, { useState } from "react";
import locate from "../assets/images/locate.png";
import destinationImg from "../assets/images/destination.png";
import Services from "./services";
import Swal from "sweetalert2";
import HeroInputElem from "./heroInput";
import AutocompleteInput from "./autoCompleteScript";
import { useGlobalState } from "./myContext";

const AddressAutoComplete = ({ isDashboard }) => {
  const { updateLocation, updateDestination } = useGlobalState();

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleLocationSelect = (address, coordinates) => {
    setSelectedLocation({ address, coordinates });
  };

  const handleDestinationSelect = (address, coordinates) => {
    setSelectedDestination({ address, coordinates });
  };

  const handleSearchRoute = () => {
    if (!selectedLocation || !selectedDestination) {
      Swal.fire({
        title: "Error!",
        text: "Please enter both location and destination.",
        icon: "error",
      });
      return;
    }

    if (
      selectedLocation.address &&
      selectedLocation.coordinates &&
      selectedDestination.address &&
      selectedDestination.coordinates
    ) {
      updateLocation(selectedLocation.address, selectedLocation.coordinates);
      updateDestination(
        selectedDestination.address,
        selectedDestination.coordinates
      );
      setIsButtonClicked(true);
    }
  };

  return (
    <>
      {!isDashboard ? (
        <HeroInputElem handleSearchRoute={handleSearchRoute} />
      ) : (
        <>
          <div className="dashInputs">
            <AutocompleteInput
              placeholder="Enter Location"
              onSelect={handleLocationSelect}
            />
            <img
              src={destinationImg}
              className="inputImg2"
              alt="Location Icon"
            />
          </div>

          <div className="dashInputs">
            <AutocompleteInput
              placeholder="Enter Destination"
              onSelect={handleDestinationSelect}
            />
            <img src={locate} alt="Destination Icon" />
          </div>
          <button className="searchRoute" onClick={handleSearchRoute}>
            Find Me
          </button>
          {isButtonClicked && <Services />}
        </>
      )}
    </>
  );
};

export default AddressAutoComplete;
