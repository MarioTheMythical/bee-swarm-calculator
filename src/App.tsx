import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "components/Interface/Main";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );
  const [dropdownCheck, setDropdownCheck] = useState(false);

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
            dropdownCheck
              ? theme
                ? "dropdown-menu visible dark-info"
                : "dropdown-menu visible"
              : theme
              ? "dropdown-menu dark-info"
              : "dropdown-menu"
          }
        >
          <Link to="/planner">
            <span />
          </Link>
          <Link to="/calculator">
            <span />
          </Link>
          <div
            className={
              dropdownCheck
                ? theme
                  ? "dropdown-menu-close dark-font"
                  : "dropdown-menu-close"
                : "hidden"
            }
            onClick={() => setDropdownCheck(false)}
          >
            ✕
          </div>
        </div>
        <div
          className={dropdownCheck ? "dropdown-menu-blur" : ""}
          onClick={() => setDropdownCheck(false)}
        />
        <div
          className={
            theme ? "main-container dark-background" : "main-container"
          }
        >
          <div className="main-title-container">
            <div
              className={theme ? "dark-menu" : "light-menu"}
              onClick={() => setDropdownCheck(true)}
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
