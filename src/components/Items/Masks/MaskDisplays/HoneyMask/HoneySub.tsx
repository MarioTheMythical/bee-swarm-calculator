import { recipeMaterial } from "libs/types";
import { useEffect } from "react";

type Props = {
  item: recipeMaterial;
  subIndex: number;
  materialValueCheck: {
    check: boolean;
    value: string | number;
    subValues: string[];
  }[];
  subValueCraftableCheck: (check: boolean) => void;
};

function HoneySub({
  item,
  subIndex,
  materialValueCheck,
  subValueCraftableCheck,
}: Props) {
  useEffect(() => {
    let subCheck = materialValueCheck.filter((item) => {
      return item.check !== true;
    });

    subCheck[0].subValues.filter(
      (item) => Number(item.split(" /")[0]) < Number(item.split("/ ")[1])
    ).length > 0
      ? subValueCraftableCheck(false)
      : subValueCraftableCheck(true);
  }, [materialValueCheck, subValueCraftableCheck]);

  return (
    <div className="item-display-subrecipe">
      {item.subRecipe?.map((item, index) => {
        return (
          <div key={index} className="item-display-subrecipe-content">
            <img
              className="item-display-content"
              src={require(`images/${item.image}`)}
              alt={item.material}
              style={{ width: 30 }}
            />
            <div className="item-display-subcontent">
              <span>{item.material}:</span>
            </div>
            <div className="item-display-content">
              {materialValueCheck[subIndex].subValues[index]}
            </div>
            {Number(
              materialValueCheck[subIndex].subValues[index].split(" /")[0]
            ) >=
            Number(
              materialValueCheck[subIndex].subValues[index].split("/ ")[1]
            ) ? (
              <div>✔️</div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HoneySub;
