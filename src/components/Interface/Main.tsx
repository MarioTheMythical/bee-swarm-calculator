import { useEffect, useState, createContext } from "react";
import { inventoryItems, inventoryMaterials } from "libs/data";
import ItemDisplay from "./ItemDisplay";
import ItemSelection from "./ItemSelection";

export const ThemeContext = createContext(true);

function Main() {
  const [displaySelection, setDisplaySelection] = useState<number>(0);
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );

  const changeUserDisplaySelection = (selection: number) => {
    setDisplaySelection(selection);
    setBssDescriptionCheck(false);
  };

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme(!theme);
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
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("BSS-Theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="main-parent-container">
        <div className="main-container">
          <div className="main-title-container">
            <div className="main-title" />
            <div
              onClick={() => changeTheme(!theme)}
              className={theme ? "dark" : "light"}
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
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  Inventory
                </span>{" "}
                tab <br /> and then select which recipe you'd like to check
                using the buttons above.
              </div>
            )}
            <ItemDisplay displaySelection={displaySelection} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Main;
