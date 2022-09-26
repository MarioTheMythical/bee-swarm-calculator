import React from "react";
import { maskRecipes } from "libs/data";

function Honey() {
  console.log(maskRecipes[0].honey);
  return (
    <div className="item-display-container">
      <div>
        {maskRecipes[0].honey.map((item, index) => {
          return (
            <div key={index}>
              <img src={require(`images/${item.image}`)} alt={item.material} />
              <div>{item.material}</div>
              <div>{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Honey;
