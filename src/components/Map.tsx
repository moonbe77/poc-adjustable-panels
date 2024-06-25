import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  // Marker,
  // useMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

const MapWrapper = () => (
  <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
    <Map
      zoom={12}
      center={{ lat: 53.54992, lng: 10.00678 }}
      className="map-wrapper"
    ></Map>

    <MyComponent />
  </APIProvider>
);

export default MapWrapper;
