import React, { useEffect } from "react";
import {
  // APIProvider,
  Map,
  // Marker,
  // useMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";
const AUS_COORDS = { lat: -25.344, lng: 131.036 };

const MyComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

const MapWrapper = () => (
  <>
    <Map
      // zoom={12}
      defaultZoom={5}
      defaultCenter={AUS_COORDS} // asutraloa coords 53.54992, 10.00678
      className="map-wrapper"
    ></Map>

    <MyComponent />
  </>
);

export default MapWrapper;
