import { useState, useEffect } from "react";
import { maskRecipes } from "libs/data";
import HoneySub from "./HoneySub";

type userMatValues = {
  check: boolean;
  value: string | number;
  subValues: string[];
}[];

function Honey() {
  const [materialValueCheck, setMaterialValueCheck] = useState<userMatValues>();
  const [craftableCheck, setCraftableCheck] = useState(true);

  // Checks inital user values from local storage and compares if > or = to required amount
  useEffect(() => {
    let userInventoryValue = 0;
    let userValues: userMatValues = [];
    let subUserInventoryValue = 0;
    let subValues: string[] = [];

    maskRecipes[0].honey.forEach((item) => {
      userInventoryValue = Number(
        JSON.parse(localStorage.getItem(item.material) || "0")
      );

      if (Number(userInventoryValue) >= item.value) {
        userValues.push({
          check: true,
          value: `${userInventoryValue} / ${item.value}`,
          subValues: [],
        });
      } else {
        if (item.subRecipe) {
          subValues = [];
          item.subRecipe?.forEach((subItem) => {
            subUserInventoryValue = Number(
              JSON.parse(localStorage.getItem(subItem.material) || "0")
            );
            subValues.push(
              `${subUserInventoryValue} / ${
                (item.value - userInventoryValue) * subItem.value
              }`
            );
          });

          return userValues.push({
            check: false,
            value: `${userInventoryValue} / ${item.value.toLocaleString()}`,
            subValues: subValues,
          });
        }
        userValues.push({
          check: false,
          value: `${userInventoryValue} / ${item.value.toLocaleString()}`,
          subValues: [],
        });
      }
    });

    setMaterialValueCheck(userValues);

    userValues.filter((item) => item.check !== true).length > 0
      ? setCraftableCheck(false)
      : setCraftableCheck(true);
  }, []);

  return (
    <div className="item-display-container">
      <div>
        {maskRecipes[0].honey.map((item, index) => {
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
                  {materialValueCheck && materialValueCheck[index].value}
                </div>
                {materialValueCheck && materialValueCheck[index].check ? (
                  <div>✔️</div>
                ) : (
                  ""
                )}
              </div>
              {materialValueCheck &&
                materialValueCheck[index].subValues.length > 0 && (
                  <HoneySub
                    item={item}
                    subIndex={index}
                    materialValueCheck={materialValueCheck}
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

export default Honey;
