import { useMap } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";
const AUS_COORDS = { lat: -25.344, lng: 131.036 };

const locations = [
  // cities in asutralia
  {
    lat: -25.344,
    lng: 131.036,
  },
  {
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    lat: -37.8136,
    lng: 144.9631,
  },
  {
    lat: -31.9505,
    lng: 115.8605,
  },
  {
    lat: -35.2809,
    lng: 149.13,
  },
];

function LeftPanel() {
  const map = useMap();
  const [index, setIndex] = React.useState(0);

  const handleNextLocation = () => {
    console.log("Next Location");
    // get next index
    const nextIndex = index + 1;
    // if next index is greater than locations length, set index to 0
    if (nextIndex >= locations.length) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  };

  useEffect(() => {
    if (!map) return;
    map.setCenter(locations[index]);
  }, [map, index]);

  return (
    <div>
      <h1>Left Panel</h1>
      <button onClick={() => map && map.setCenter(AUS_COORDS)}>
        Set Center
      </button>
      <button onClick={handleNextLocation}>Go to next</button>
    </div>
  );
}

export default LeftPanel;
