import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme((current) => !current);
  };

  return (
    <div>
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
            Tools to help you while playing Bee Swarm Sim.
          </div>
          <div
            className={theme ? "main-items-container" : "main-items-container"}
          >
            {
              <div
                className={
                  theme ? "main-description dark-info" : "main-description"
                }
              >
                To use the Hive Planner, select which rarity of bees you want
                and drag the icon into the{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  hive.
                </span>{" "}
                After you're happy with your hive setup, you can save it for
                later. <br />
                (Hive data only saves on your current device and gets deleted if
                you clear browser cache.)
              </div>
            }
            <Link to="/calculator">
              <div>Calculator</div>
            </Link>
            <Link to="/planner">
              <div>Planner</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
