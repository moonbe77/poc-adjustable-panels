import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import Map from "./components/Map";
import MapProvider from "./providers/MapProivder";

function App() {
  console.log("App");
  return (
    <MapProvider>
      <div className="main-content">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={30} minSize={20}>
            <LeftPanel />
          </Panel>

          <PanelResizeHandle />
          <Panel defaultSize={30} minSize={20}>
            <Map />
          </Panel>
        </PanelGroup>
      </div>
    </MapProvider>
  );
}

export default App;
