// GlobalStateContext.js

import React, { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [distance, setDistance] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [userId, setUserId] = useState(null);
  const [locationAddress, setLocationAddress] = useState("");
  const [locationCoordinates, setLocationCoordinates] = useState(null);
  const [destinationAddress, setDestinationAddress] = useState("");
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

  const updateLocation = (address, coordinates) => {
    setLocationAddress(address);
    setLocationCoordinates(coordinates);
  };

  const updateDestination = (address, coordinates) => {
    setDestinationAddress(address);
    setDestinationCoordinates(coordinates);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        distance,
        setDistance,
        email,
        setEmail,
        phone,
        setPhone,
        fullname,
        setFullname,

        userId,
        setUserId,
        locationAddress,
        locationCoordinates,
        destinationAddress,
        destinationCoordinates,
        updateLocation,
        updateDestination,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
