import React, { useEffect } from "react";
import { APIProvider, useMap } from "@vis.gl/react-google-maps";

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

const Map = () => (
  <APIProvider apiKey={"YOUR API KEY HERE"}>
    <Map /* ... */></Map>

    <MyComponent />
  </APIProvider>
);

export default Map;
