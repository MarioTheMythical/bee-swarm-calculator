import { recipeMaterial } from "libs/types";
import { useEffect } from "react";

type Props = {
  item: recipeMaterial;
  subIndex: number;
  materialValueCheck: {
    check: boolean;
    value: string | number;
    subValues: { displayValue: string; actualValue: string }[];
  }[];
  subValueCraftableCheck: (check: boolean) => void;
};

function SubRecipeDisplay({
  item,
  subIndex,
  materialValueCheck,
  subValueCraftableCheck,
}: Props) {
  useEffect(() => {
    let finalSubCheck: string[] = [];
    let subCheck = materialValueCheck.filter((item) => {
      return item.check !== true;
    });

    subCheck.forEach((item) => {
      if (item.subValues.length > 0) {
        item.subValues.forEach((subItem) => {
          finalSubCheck.push(subItem.actualValue);
        });
      } else {
        finalSubCheck.push(item.value.toString());
      }
    });

    return finalSubCheck.filter((item) => {
      return Number(item.split(" /")[0]) < Number(item.split("/ ")[1]);
    }).length > 0
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
              {materialValueCheck[subIndex].subValues[index].displayValue}
            </div>
            {Number(
              materialValueCheck[subIndex].subValues[index].actualValue.split(
                " /"
              )[0]
            ) >=
            Number(
              materialValueCheck[subIndex].subValues[index].actualValue.split(
                "/ "
              )[1]
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

export default SubRecipeDisplay;
