import { recipeMaterial } from "libs/types";

type Props = {
  item: recipeMaterial;
  subIndex: number;
  materialValueCheck: {
    check: boolean;
    value: string | number;
    subValues: number[];
  }[];
};

function HoneySub({ item, subIndex, materialValueCheck }: Props) {
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
            {materialValueCheck[subIndex].subValues && (
              <div className="item-display-content">
                {materialValueCheck[subIndex].subValues[index]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default HoneySub;
