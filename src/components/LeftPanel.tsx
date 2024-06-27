import { useMap } from "@vis.gl/react-google-maps";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import PanelHeader from "./PanelHeader";
import { ImperativePanelHandle, Panel } from "react-resizable-panels";
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
  const panelRef = useRef<ImperativePanelHandle>(null);

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
    <Panel ref={panelRef}>
      <PanelHeader title="Build Catchments" panelRef={panelRef} />
      <div className="p-4 flex flex-col gap-4 items-center justify-center w-full">
        <Button
          variant="destructive"
          size="default"
          // asChild
          onClick={() => map && map.setCenter(AUS_COORDS)}
        >
          Set Center
        </Button>

        <Button onClick={handleNextLocation}>Go to next</Button>
      </div>
    </Panel>
  );
}

export default LeftPanel;
