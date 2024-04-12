// AutocompleteInput.js
import React, { useRef, useEffect } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const AutocompleteInput = ({ placeholder, onSelect }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const locationOptions = {
      componentRestrictions: { country: "ng" },
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["establishment"],
    };

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      locationOptions
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) return;

      const formatted_address = place.address_components
        .map((component) => component.long_name)
        .join(", ");

      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      onSelect(formatted_address, latLng);

      // Optional: Fetch LatLng coordinates
      geocodeByAddress(formatted_address)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          // Handle latLng result
        })
        .catch((error) => console.error("Error fetching geocode: ", error));
    });
    return () => {
      if (inputRef.current) {
        window.google.maps.event.clearInstanceListeners(inputRef.current);
      }
    };
  }, [onSelect]);

  return <input ref={inputRef} type="text" placeholder={placeholder} />;
};

export default AutocompleteInput;
