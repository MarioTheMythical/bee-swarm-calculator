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
  const [saveDisplayCheck, setSaveDisplayCheck] = useState(false);
  const [copyCheck, setCopyCheck] = useState(false);
  const theme = useContext(PlannerThemeContext);

  useEffect(() => {
    const hiveArrayToString = hiveSlots
      .map((item) => {
        if (item.name.includes("★")) {
          return "G" + item.id;
        }
        return item.id;
      })
      .join("-");

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

  // USE FOR COPY EXPORT CODE
  // onClick={() => {
  //   navigator.clipboard.writeText("test");
  // }}

  const changeCopyCheck = () => {
    setCopyCheck(true);

    setTimeout(() => setCopyCheck(false), 1000);
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
            <input />
          </div>
          <div className="planner-save-slot-container">
            <div>Save Slot</div>
            <div className="planner-save-slots">
              <div>Empty</div>
              <div>Empty</div>
              <div>Empty</div>
            </div>
          </div>
          <div>
            <div className={copyCheck ? "planner-export-title-container" : ""}>
              <div>Export Code</div>
              {copyCheck && <div>Copied!</div>}
            </div>
            <div className="planner-save-export">
              <FontAwesomeIcon icon={faCopy} onClick={changeCopyCheck} />
              <div>
                CodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCode
              </div>
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
