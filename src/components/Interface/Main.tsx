import { useState } from "react";
import ItemDisplay from "./ItemDisplay";
import ItemSelection from "./ItemSelection";

function Main() {
  const [displaySelection, setDisplaySelection] = useState<number>(0);

  const changeUserDisplaySelection = (selection: number) => {
    setDisplaySelection(selection);
  };

  return (
    <div className="main-parent-container">
      <div className="main-container">
        <div className="main-title">Bee Swarm Sim Calculator</div>
        <div className="main-items-container">
          <ItemSelection
            displaySelection={displaySelection}
            changeUserDisplaySelection={changeUserDisplaySelection}
          />
          <ItemDisplay displaySelection={displaySelection} />
        </div>
      </div>
    </div>
  );
}

export default Main;
