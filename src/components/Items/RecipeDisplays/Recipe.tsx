import { useState, useEffect } from "react";
import SubRecipeDisplay from "./SubRecipeDisplay";
import abbreviateNumbers from "custom/AbbreviateNumbers";
import { recipeMaterial } from "libs/types";

type userMatValues = {
  check: boolean;
  value: string | number;
  subValues: { displayValue: string; actualValue: string }[];
}[];

type Props = {
  recipeData: recipeMaterial[];
};

function Recipe({ recipeData }: Props) {
  const [materialValueCheck, setMaterialValueCheck] = useState<userMatValues>();
  const [craftableCheck, setCraftableCheck] = useState(false);

  // Checks inital user values from local storage and compares if > or = to required amount
  useEffect(() => {
    let userInventoryValue = 0;
    let userValues: userMatValues = [];
    let subUserInventoryValue = 0;
    let finalValue = "";
    let finalUserValue = "";
    let finalSubValue = "";
    let finalUserSubValue = "";

    recipeData.forEach((item) => {
      userInventoryValue = Number(
        JSON.parse(localStorage.getItem(item.material) || "0")
      );
      finalValue = abbreviateNumbers(item.value);
      finalUserValue = abbreviateNumbers(userInventoryValue);

      if (Number(userInventoryValue) >= item.value) {
        userValues.push({
          check: true,
          value: `${finalUserValue} / ${finalValue}`,
          subValues: [],
        });
      } else {
        if (item.subRecipe) {
          let subValues: { displayValue: string; actualValue: string }[] = [];

          item.subRecipe?.forEach((subItem) => {
            subUserInventoryValue = Number(
              JSON.parse(localStorage.getItem(subItem.material) || "0")
            );
            finalSubValue = abbreviateNumbers(
              (item.value - userInventoryValue) * subItem.value
            );
            finalUserSubValue = abbreviateNumbers(subUserInventoryValue);
            subValues.push({
              displayValue: `${finalUserSubValue} / ${finalSubValue}`,
              actualValue: `${subUserInventoryValue} / ${
                (item.value - userInventoryValue) * subItem.value
              }`,
            });
          });

          return userValues.push({
            check: false,
            value: `${finalUserValue} / ${finalValue}`,
            subValues: subValues,
          });
        }
        userValues.push({
          check: false,
          value: `${finalUserValue} / ${finalValue}`,
          subValues: [],
        });
      }
    });

    setMaterialValueCheck(userValues);

    if (
      userValues?.filter((item) => {
        return item.check !== true;
      }).length === 0
    ) {
      setCraftableCheck(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeData]);

  const subValueCraftableCheck = (check: boolean) => {
    if (materialValueCheck) {
      if (check) {
        return setCraftableCheck(true);
      }
    }
    setCraftableCheck(false);
  };

  return (
    <div className="item-display-container">
      <div>
        {recipeData.map((item, index) => {
          return (
            <div key={index} className="item-display-recipe-container">
              <div className="item-display-recipe">
                <img
                  className="item-display-content"
                  src={require(`images/${item.image}`)}
                  alt={item.material}
                  style={{ width: 30 }}
                />
                <div className="item-display-content">{item.material}:</div>
                <div className="item-display-content">
                  {materialValueCheck && materialValueCheck[index]?.value}
                </div>
                {materialValueCheck && materialValueCheck[index]?.check ? (
                  <div>✔️</div>
                ) : (
                  ""
                )}
              </div>
              {materialValueCheck &&
                materialValueCheck[index]?.subValues.length > 0 && (
                  <SubRecipeDisplay
                    item={item}
                    subIndex={index}
                    materialValueCheck={materialValueCheck}
                    subValueCraftableCheck={subValueCraftableCheck}
                  />
                )}
            </div>
          );
        })}
      </div>
      {craftableCheck && <div className="item-craftable">🎉 Craftable! 🎉</div>}
    </div>
  );
}

export default Recipe;
