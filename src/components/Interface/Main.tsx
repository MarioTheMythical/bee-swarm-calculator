import { useState } from "react";
import ItemDisplay from "./ItemDisplay";
import ItemSelection from "./ItemSelection";

function Main() {
  const [displaySelection, setDisplaySelection] = useState<number>(0);
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);

  const changeUserDisplaySelection = (selection: number) => {
    setDisplaySelection(selection);
    setBssDescriptionCheck(false);
  };

  return (
    <div className="main-parent-container">
      <div className="main-container">
        <div className="main-title">Bee Swarm Sim Calculator</div>
        <div className="main-subtitle">
          A recipe calculator which makes it easier to track your progress.
        </div>
        <div className="main-items-container">
          <ItemSelection
            displaySelection={displaySelection}
            changeUserDisplaySelection={changeUserDisplaySelection}
          />
          {bssDescriptionCheck && (
            <div className="main-description">
              To get started using BSS Calculator, enter your current item and
              material amounts within the{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                Inventory
              </span>{" "}
              tab and then select which recipe you'd like to check using the
              buttons above.
            </div>
          )}
          <ItemDisplay displaySelection={displaySelection} />
        </div>
      </div>
    </div>
  );
}

export default Main;
