import React from "react";
import { recipeMaterial } from "libs/types";

type Props = {
  item: recipeMaterial;
  materialValueCheck:
    | {
        check: boolean;
        value: number;
        subValues?: number[];
      }[]
    | undefined;
};

function HoneySub({ item, materialValueCheck }: Props) {
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
            <div className="item-display-content">{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default HoneySub;
