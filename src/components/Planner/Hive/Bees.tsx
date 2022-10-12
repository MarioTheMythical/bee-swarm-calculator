import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { useContext, useState } from "react";
import { beeTypes } from "libs/data";
import TypeDisplay from "./TypeDisplay";

function Bees({
  descriptionCheck,
  giftedCheck,
  selectGifted,
}: {
  descriptionCheck: () => void;
  giftedCheck: boolean;
  selectGifted: () => void;
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
      <button
        onClick={selectGifted}
        className={theme ? "bees-gifted dark-info" : "bees-gifted"}
      >
        Gifted {giftedCheck ? "✅" : "❌"}
      </button>
    </div>
  );
}

export default Bees;
