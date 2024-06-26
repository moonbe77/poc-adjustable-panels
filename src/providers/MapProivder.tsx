import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";

interface MapProviderProps {
  children: React.ReactNode;
}

function MapProvider(props: MapProviderProps) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
      {props.children}
    </APIProvider>
  );
}

export default MapProvider;
