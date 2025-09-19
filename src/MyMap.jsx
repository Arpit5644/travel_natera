import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "400px" };
const center = { lat: 28.6139, lng: 77.209 }; // New Delhi

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDkserROrMCVQ3VZeUNb7uEil14sGstZe8", // Replace with your valid key
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default MyMap;
