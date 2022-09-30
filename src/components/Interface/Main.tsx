import { inventoryItems, inventoryMaterials } from "libs/data";
import { useEffect, useState } from "react";
import ItemDisplay from "./ItemDisplay";
import ItemSelection from "./ItemSelection";

function Main() {
  const [displaySelection, setDisplaySelection] = useState<number>(0);
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);
  const [theme, setTheme] = useState(false);

  const changeUserDisplaySelection = (selection: number) => {
    setDisplaySelection(selection);
    setBssDescriptionCheck(false);
  };

  const changeTheme = (selection: boolean) => {
    setTheme(selection);
  };

  useEffect(() => {
    inventoryItems.forEach((item) => {
      if (!localStorage.getItem(`${item.name}`)) {
        localStorage.setItem(`${item.name}`, JSON.stringify("0"));
      }
    });
    inventoryMaterials.forEach((item) => {
      if (!localStorage.getItem(`${item.name}`)) {
        localStorage.setItem(`${item.name}`, JSON.stringify("0"));
      }
    });
  }, []);

  return (
    <div className="main-parent-container">
      <div className="main-container">
        <div className="main-title-container">
          <div className="main-title" />
          <div
            onClick={() => changeTheme(!theme)}
            className={theme ? "light" : "dark"}
          />
        </div>
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
              tab <br /> and then select which recipe you'd like to check using
              the buttons above.
            </div>
          )}
          <ItemDisplay displaySelection={displaySelection} />
        </div>
      </div>
    </div>
  );
}

export default Main;
