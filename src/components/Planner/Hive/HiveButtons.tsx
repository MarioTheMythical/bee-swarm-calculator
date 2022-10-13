import { useContext, useEffect, useState } from "react";
import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { giftedBeeTypeDisplay, beeTypeDisplay, HiveSlots } from "libs/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function HiveButtons({
  clearHive,
  hiveSlots,
}: {
  clearHive: () => void;
  hiveSlots: {
    name: string;
    id: string;
    image: string;
  }[];
}) {
  const theme = useContext(PlannerThemeContext);
  const [saveDisplayCheck, setSaveDisplayCheck] = useState(false);
  const [copyCheck, setCopyCheck] = useState(false);
  const [hiveNameInput, setHiveNameInput] = useState("");
  const [hiveSlotNames, setHiveSlotNames] = useState<string[]>([]);
  const [hiveSlotSelection, setHiveSlotSelection] = useState(0);
  const [hiveExportCode, setHiveExportCode] = useState("");

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (localStorage.getItem(`HiveSlot-${i + 1}`)) {
        setHiveSlotNames((current) => [
          ...current,
          localStorage.getItem(`HiveSlot-${i + 1}`) || "",
        ]);
      } else {
        setHiveSlotNames((current) => [...current, "Empty"]);
      }
    }
  }, []);

  useEffect(() => {
    const hiveArrayToString = hiveSlots
      .map((item) => {
        if (item.name.includes("★")) {
          return "G" + item.id;
        }
        return item.id;
      })
      .join("-");

    setHiveExportCode(hiveArrayToString);

    const giftedBees: { name: string; id: string; image: string }[] = [
      ...giftedBeeTypeDisplay.rare,
      ...giftedBeeTypeDisplay.epic,
      ...giftedBeeTypeDisplay.legendary,
      ...giftedBeeTypeDisplay.mythic,
      ...giftedBeeTypeDisplay.event,
    ];

    const normalBees: { name: string; id: string; image: string }[] = [
      ...beeTypeDisplay.rare,
      ...beeTypeDisplay.epic,
      ...beeTypeDisplay.legendary,
      ...beeTypeDisplay.mythic,
      ...beeTypeDisplay.event,
    ];

    const loadHive = hiveArrayToString.split("-").map((item) => {
      if (item === "0") {
        return HiveSlots[0];
      }
      if (item.includes("G")) {
        return giftedBees[Number(item.replace("G", "")) - 1];
      }
      return normalBees[Number(item.replace("G", "")) - 1];
    });
  }, [hiveSlots]);

  const changeCopyCheck = () => {
    setCopyCheck(true);

    setTimeout(() => setCopyCheck(false), 1000);
  };

  const userHiveInput = (event: string) => {
    if (event.length > 12) return;

    setHiveNameInput(event);
  };

  return (
    <div className="planner-btn-container">
      {saveDisplayCheck && (
        <div
          className={
            saveDisplayCheck ? "planner-blur planner-visible" : "planner-blur"
          }
          onClick={() => setSaveDisplayCheck(false)}
        />
      )}
      {saveDisplayCheck && (
        <div
          className={
            saveDisplayCheck
              ? theme
                ? "planner-save-display planner-visible dark-info"
                : "planner-save-display planner-visible planner-light"
              : "planner-save-display"
          }
        >
          <div className="planner-save-name-container">
            <div>Hive Name</div>
            <input
              className="planner-save-input"
              placeholder="Max 12 Characters"
              onChange={(event) => userHiveInput(event.target.value)}
            />
          </div>
          <div className="planner-save-slot-container">
            <div>Save Hive Slot</div>
            <div className="planner-save-slots">
              {hiveSlotNames.map((name, index) => {
                return (
                  <div
                    key={index}
                    className={
                      name === "Empty"
                        ? "planner-save-slot-content planner-slot-empty"
                        : name.toLocaleLowerCase().includes("blue")
                        ? "planner-save-slot-content planner-slot-blue"
                        : name.toLocaleLowerCase().includes("red")
                        ? "planner-save-slot-content planner-slot-red"
                        : "planner-save-slot-content planner-slot-filled"
                    }
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className={copyCheck ? "planner-export-title-container" : ""}>
              <div>Export Code</div>
              {copyCheck && <div>Copied!</div>}
            </div>
            <div className="planner-save-export">
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => {
                  changeCopyCheck();
                  navigator.clipboard.writeText(
                    hiveNameInput + "-" + hiveExportCode
                  );
                }}
              />
              <div>{hiveNameInput + "-" + hiveExportCode}</div>
            </div>
          </div>
          <div className="planner-btn-container">
            <div
              className="planner-btn planner-save-btn planner-load"
              onClick={() => setSaveDisplayCheck(false)}
            >
              Save
            </div>
            <div
              className="planner-btn planner-save-btn planner-load"
              onClick={() => setSaveDisplayCheck(false)}
            >
              Close
            </div>
          </div>
        </div>
      )}
      <div
        className="planner-btn planner-save"
        onClick={() => setSaveDisplayCheck(true)}
      >
        Save
      </div>
      <div className="planner-btn planner-load">Load</div>
      <div className="inventory-reset-button" onClick={clearHive}>
        Clear
      </div>
    </div>
  );
}

export default HiveButtons;
