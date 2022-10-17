import { PlannerThemeContext } from "components/Interface/BondMain";
import abbreviateNumbers from "custom/AbbreviateNumbers";
import { bondExp } from "libs/data";
import { useContext, useEffect, useState } from "react";

function Bond() {
  const theme = useContext(PlannerThemeContext);
  const [hiveSlots, setHiveSlots] = useState("");
  const [bondBonus, setBondBonus] = useState("");
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
      let bonus = Number("0." + (100 - Number(bondBonus)));
      if (bondBonus === "" || bondBonus === "0") bonus = 1;
      const abbreviatedNext = abbreviateNumbers(item.next);
      const abbreviatedSingle = abbreviateNumbers(
        (item.next / 10) * 10000 * bonus
      );
      const abbreviatedTotal = abbreviateNumbers(
        (item.next / 10) * 10000 * Number(hiveSlots) * bonus
      );

      return {
        level: item.level,
        next: abbreviatedNext,
        single: abbreviatedSingle,
        total: abbreviatedTotal,
      };
    });

    setBondData(newBondData);
  }, [hiveSlots, bondBonus]);

  const userSlotsInput = (value: string) => {
    const num = Number(value);

    if (value === "") {
      return setHiveSlots("");
    }

    if (num > 50) {
      return setHiveSlots("50");
    }

    if (num <= 50 && num > 0) {
      setHiveSlots(value.slice(0, 2));
    }
  };

  const userBonusInput = (value: string) => {
    const num = Number(value.slice(0, 2));

    if (value === "") {
      return setBondBonus("");
    }

    if (num <= 99 && num >= 0) {
      setBondBonus(value.slice(0, 2));
    }
  };

  return (
    <div className="bond-container">
      <div className="bond-input-container">
        <div>Unlocked hive slots: </div>
        <input
          className="bond-input"
          type="number"
          maxLength={2}
          value={hiveSlots}
          placeholder="0"
          onChange={(e) => {
            userSlotsInput(e.target.value);
          }}
        />
        <div style={{ marginLeft: 20 }}>Bond Bonus %: </div>
        <input
          className="bond-input"
          value={bondBonus}
          placeholder="0"
          onChange={(e) => {
            userBonusInput(e.target.value);
          }}
        />
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
