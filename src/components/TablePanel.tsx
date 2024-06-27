import { ImperativePanelHandle, Panel } from "react-resizable-panels";
import PanelHeader from "./PanelHeader";
import { useRef } from "react";

function TablePanel() {
  const panelRef = useRef<ImperativePanelHandle>(null);

  return (
    <Panel ref={panelRef}>
      <PanelHeader title="Catchments" panelRef={panelRef} />

      <h1>TABLE TEST</h1>
    </Panel>
  );
}

export default TablePanel;
