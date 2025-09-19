import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%", // Fill parent section
  borderRadius: "16px",
};

const center = { lat: 28.6139, lng: 77.209 }; // New Delhi

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDkserROrMCVQ3VZeUNb7uEil14sGstZe8",
  });

  if (!isLoaded) {
    return <div className="text-center py-10 text-gray-500">Loading map...</div>;
  }

  return (
    <div className="w-[90%] h-[80vh] shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default MyMap;
