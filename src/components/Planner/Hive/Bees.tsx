import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { useContext, useState } from "react";
import { beeTypes } from "libs/data";
import TypeDisplay from "./TypeDisplay";

function Bees({ descriptionCheck }: { descriptionCheck: () => void }) {
  const [beeTypeSelection, setBeeTypeSelection] = useState(0);
  const [giftedCheck, setGiftedCheck] = useState(false);
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
      <TypeDisplay type={beeTypeSelection} />
      <button
        onClick={() => setGiftedCheck((current) => !current)}
        className={theme ? "bees-gifted dark-info" : "bees-gifted"}
      >
        Gifted {giftedCheck ? "✅" : "❌"}
      </button>
    </div>
  );
}

export default Bees;
