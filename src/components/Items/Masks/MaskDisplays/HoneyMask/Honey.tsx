import { useState } from "react";
import { maskRecipes } from "libs/data";
import HoneySub from "./HoneySub";
import { useEffect } from "react";

function Honey() {
  const [recipeMaterialValue, setRecipeMaterialValue] = useState(0);

  useEffect(() => {
    let userValues: (number | string)[] = [];

    maskRecipes[0].honey.forEach((item) => {
      if (localStorage.getItem(item.material)) {
        userValues.push(
          Number(JSON.parse(localStorage.getItem(item.material) || ""))
        );
      } else {
        userValues.push(0);
      }
    });
    console.log(userValues);
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
                <div className="item-display-content">{item.material}</div>
                <div className="item-display-content">
                  {item.value.toLocaleString()}
                </div>
              </div>
              {item.subRecipe && <HoneySub item={item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Honey;
