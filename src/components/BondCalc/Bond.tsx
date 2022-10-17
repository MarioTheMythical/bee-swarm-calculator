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
      next: string;
      single: string;
      total: string;
    }[]
  >();

  useEffect(() => {
    const newBondData = bondExp.map((item) => {
      const abbreviatedNext = abbreviateNumbers(item.next);
      const abbreviatedSingle = abbreviateNumbers((item.next / 10) * 10000);
      const abbreviatedTotal = abbreviateNumbers(
        (item.next / 10) * 10000 * hiveSlots
      );

      return {
        level: item.level,
        next: abbreviatedNext,
        single: abbreviatedSingle,
        total: abbreviatedTotal,
      };
    });

    setBondData(newBondData);
  }, [hiveSlots]);

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
        {bondData?.map((item) => {
          return (
            <div key={item.level} className="bond-table-value-container">
              <div>{item.level}</div>
              <div>{item.next}</div>
              <div>{item.single}</div>
              <div>{item.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bond;
