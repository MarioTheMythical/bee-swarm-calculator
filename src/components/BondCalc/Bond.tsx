import { PlannerThemeContext } from "components/Interface/BondMain";
import abbreviateNumbers from "custom/AbbreviateNumbers";
import { bondExp } from "libs/data";
import { useContext, useEffect, useState } from "react";

function Bond() {
  const theme = useContext(PlannerThemeContext);
  const [hiveSlots, setHiveSlots] = useState(50);
  const [bondData, setBondData] = useState<
    {
      level: number;
      total: number;
      next: number;
      honeySingle: string;
      honeyTotal: string;
    }[]
  >();

  useEffect(() => {
    bondExp.forEach((item) => {
      const abbreviatedNext = abbreviateNumbers(item.next);
      const abbreviatedSingle = abbreviateNumbers((item.next / 10) * 10000);
      const abbreviatedTotal = (item.next / 10) * 10000 * hiveSlots;

      console.log(abbreviatedTotal);
    });
  }, []);

  return (
    <div className="bond-container">
      <div className="bond-input-container">
        <div>Unlocked hive slots: </div>
        <input className="bond-input" />
        <div style={{ marginLeft: 20 }}>Bond % Bonus: </div>
        <input className="bond-input" />
      </div>
      <div className="bond-table-container">
        <div className="bond-table-titles">
          <div />
          <div />
          <div />
          <div />
        </div>
        {bondExp.map((item) => {
          return (
            <div key={item.level} className="bond-table-value-container">
              <div>{item.level}</div>
              <div>{item.next}</div>
              <div>{(item.next / 10) * 10000}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bond;
