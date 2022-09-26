import { useState } from "react";
import { masks } from "../../../libs/data";

function Masks() {
  const [maskSelection, setMaskSelection] = useState(0);
  return (
    <div className="masks-container">
      <div className="masks-title-container">
        {masks.map((mask, index) => {
          return (
            <div key={index} className="items-titles">
              <div>{mask.name}</div>
              <img
                src={require(`../../../images/${mask.image}`)}
                alt={mask.name}
                style={{ width: 50 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Masks;
