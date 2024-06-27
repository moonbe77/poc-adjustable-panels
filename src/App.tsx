import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import "./styles/globals.css";
import "./styles/App.css";
import LeftPanel from "./components/LeftPanel";
import Map from "./components/Map";
import MapProvider from "./providers/MapProivder";
import TablePanel from "./components/TablePanel";
import React from "react";

function App() {
  const panelRef = React.useRef<ImperativePanelHandle>(null);

  const handleRest = () => {
    const panel = panelRef?.current;
    if (panel) {
      panel.resize(75);
    }
  };
  return (
    <MapProvider>
      <div className="main-content">
        <div className=" bg-slate-300">
          <h1 className="text-3xl font-bold text-center w-20 h-20 border place-content-center">
            1
          </h1>
          <h1 className="text-3xl font-bold text-center w-20 h-20 border place-content-center">
            2
          </h1>
          <h1 className="text-3xl font-bold text-center w-20 h-20 border place-content-center">
            3
          </h1>
          <h1 className="text-3xl font-bold text-center w-20 h-20 border place-content-center">
            4
          </h1>
        </div>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={25} minSize={25}>
            <PanelGroup direction="vertical">
              <LeftPanel />

              <PanelResizeHandle className="h-1 bg-gray-400 hover:bg-gray-700" />

              <TablePanel />
            </PanelGroup>
          </Panel>

          <PanelResizeHandle
            className="w-1 bg-gray-400 hover:bg-gray-700 "
            onDoubleClick={handleRest}
          />
          <Panel defaultSize={75} minSize={40} ref={panelRef}>
            <Map />
          </Panel>
        </PanelGroup>
      </div>
    </MapProvider>
  );
}

export default App;
