import React from "react";
import { recipeMaterial } from "libs/types";
type Props = {
  item: recipeMaterial;
};

function HoneySub({ item }: Props) {
  return (
    <div className="item-display-subrecipe">
      {item.subRecipe?.map((item, index) => {
        return (
          <div key={index} className="item-display-subrecipe">
            <img
              className="item-display-content"
              src={require(`images/${item.image}`)}
              alt={item.material}
              style={{ width: 30 }}
            />
            <div className="item-display-subcontent">
              <span>{item.material}</span>
            </div>
            <div className="item-display-content">{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default HoneySub;
