import { useState } from "react";
import { HiveSlots } from "libs/data";

function Hive() {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);
  return (
    <div className="hive">
      <div className="hive-container">
        {hiveSlots.map((hive, index) => {
          return (
            <div key={index} className="hive-slot">
              {hive.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hive;
