import { ImperativePanelHandle } from "react-resizable-panels";
import { Button } from "./ui/button";

function PanelHeader({
  title,
  panelRef,
}: {
  title: string;
  panelRef: React.RefObject<ImperativePanelHandle>;
}) {
  const collapsePanel = () => {
    const panel = panelRef?.current;
    if (panel && panel.getSize() > 20) {
      panel.resize(8);
    } else {
      panel?.resize(50);
    }
  };
  return (
    <div className="bg-blue-800 h-16 flex p-4 items-center justify-between">
      <h1 className="text-white uppercase">{title}</h1>
      <Button variant="secondary" size="sm" onClick={collapsePanel}>
        Collapse
      </Button>
    </div>
  );
}

export default PanelHeader;
