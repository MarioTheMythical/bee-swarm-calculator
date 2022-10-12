import { useEffect, useState, createContext } from "react";
import Hive from "components/Planner/Hive/Hive";

export const ThemeContext = createContext(true);

function PlannerMain() {
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme(!theme);
  };

  useEffect(() => {
    if (!localStorage.getItem("BSS-Theme")) {
      console.log(true);
      localStorage.setItem("BSS-Theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="main-parent-container"
        style={{
          backgroundColor: theme ? "rgb(29, 54, 62)" : "rgb(152, 203, 223)",
        }}
      >
        <div
          className={
            theme ? "main-container dark-background" : "main-container"
          }
        >
          <div className="main-title-container">
            <div className={theme ? "main-title dark-font" : "main-title"} />
            <div
              onClick={() => changeTheme(!theme)}
              className={theme ? "dark" : "light"}
            />
          </div>
          <div className={theme ? "main-subtitle dark-font" : "main-subtitle"}>
            A tool to help plan your future hive ideas.
          </div>
          <div
            className={theme ? "main-items-container" : "main-items-container"}
          >
            {bssDescriptionCheck && (
              <div
                className={
                  theme ? "main-description dark-info" : "main-description"
                }
              >
                To get started using BSS Calculator, enter your current item and
                material amounts within the{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  Inventory
                </span>{" "}
                tab and then select which recipe you'd like to check using the
                buttons above.
              </div>
            )}
            <Hive />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default PlannerMain;
