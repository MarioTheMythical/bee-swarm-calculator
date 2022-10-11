import { useState } from "react";
import { beeTypes } from "libs/data";
import TypeDisplay from "./TypeDisplay";

function Bees() {
  const [beeTypeSelection, setBeeTypeSelection] = useState(0);
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
              onClick={() => setBeeTypeSelection(index)}
            >
              {type}
            </div>
          );
        })}
      </div>
      <TypeDisplay type={beeTypeSelection} />
    </div>
  );
}

export default Bees;
