import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { useContext, useState } from "react";
import { beeTypes } from "libs/data";
import TypeDisplay from "components/Planner/TypeDisplay";

function Bees({
  descriptionCheck,
  giftedCheck,
  selectGifted,
  changeHiveLevel,
}: {
  descriptionCheck: () => void;
  giftedCheck: boolean;
  selectGifted: () => void;
  changeHiveLevel: (hiveLevelInput: number) => void;
}) {
  const [beeTypeSelection, setBeeTypeSelection] = useState(0);

  const theme = useContext(PlannerThemeContext);

  return (
    <div className="bees-container">
      <div className="bees-type-container">
        {beeTypes.map((type, index) => {
          return (
            <div
              key={index}
              className={
                beeTypeSelection === index
                  ? "bees-button bees-selected"
                  : "bees-button"
              }
              onClick={() => {
                setBeeTypeSelection(index);
                descriptionCheck();
              }}
            >
              {type}
            </div>
          );
        })}
      </div>
      <TypeDisplay type={beeTypeSelection} giftedCheck={giftedCheck} />
      <div
        className={
          theme ? "bees-input-container dark-info" : "bees-input-container"
        }
      >
        <button
          onClick={selectGifted}
          className={theme ? "bees-gifted dark-info" : "bees-gifted"}
        >
          Gifted {giftedCheck ? "✅" : "❌"}
        </button>
        <div className="bees-hive-level">
          Hive level:
          <input
            className="bond-input"
            onChange={(event) => changeHiveLevel(Number(event.target.value))}
            value={localStorage.getItem("hiveLevel") || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Bees;
