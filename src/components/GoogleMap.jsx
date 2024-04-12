import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useGlobalState } from "./myContext";

const libraries = ["places"];
let mapContainerStyle = {
  width: "80vw",
  height: "110vh",
};

const defaultCenter = {
  lat: 9.0562646, // default latitude
  lng: 7.4985259, // default longitude
};

const MapWithDistance = () => {
  const { locationCoordinates, destinationCoordinates, setDistance } =
    useGlobalState();
  const [directions, setDirections] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyATHqWIYXgzKPM4jCXV4kIfb6rCR2WJV60",
    libraries,
  });

  const directionsCallback = (response) => {
    if (response !== null && directions === null) {
      if (response.status === "OK") {
        setDirections(response);
        // Extract distance from the response
        const route = response.routes[0];
        let totalDistance = 0;
        route.legs.forEach((leg) => {
          totalDistance += leg.distance.value;
        });
        // Convert distance from meters to kilometers
        totalDistance = totalDistance / 1000;
        // Update the state with the calculated distance
        setDistance(totalDistance.toFixed(2));
      } else {
        console.log("Directions request failed:", response.status);
      }
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="loader"></div>;
  }

  let mapOptions = {
    styles: [
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f2efe9" }, { visibility: "on" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#B3B3C9" }, { visibility: "on" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#A0A0C9" }, { visibility: "on" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#9EB79E" }, { visibility: "on" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#e24948" }, { visibility: "on" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e24948" }, { weight: 2 }],
      },
    ],
  };

  // Update mapOptions for mobile view
  if (window.innerWidth <= 767) {
    mapOptions = {
      styles: [
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#2d2829" }, { visibility: "on" }],
        },
        // Include other styles as needed
      ],
    };
    mapContainerStyle = {
      width: "100%",
      height: "80vh",
    };
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={defaultCenter}
        options={mapOptions}
      >
        {locationCoordinates && (
          <Marker
            position={locationCoordinates}
            label=""
            icon={{
              url: "https://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        )}
        {destinationCoordinates && (
          <Marker
            position={destinationCoordinates}
            label=""
            icon={{
              url: "src/assets/images/brand2.png",
              scaledSize: new window.google.maps.Size(80, 80),
            }}
          />
        )}
        {locationCoordinates && destinationCoordinates && (
          <DirectionsService
            options={{
              destination: destinationCoordinates,
              origin: locationCoordinates,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />
        )}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      {/* {distance && <div>Distance: {distance} km</div>} */}
    </div>
  );
};

export default MapWithDistance;
