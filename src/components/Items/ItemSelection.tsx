import { useContext } from "react";
import { itemTypes } from "libs/types";
import { ThemeContext } from "components/Interface/Main";

type Props = {
  itemData: itemTypes;
  itemSelection: number;
  changeItemSelection: (selection: number) => void;
};

function ItemSelection({
  itemData,
  itemSelection,
  changeItemSelection,
}: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div className="items-titles-container">
      {itemData.map((item, index) => {
        return (
          <div
            key={index}
            className={
              itemSelection === index
                ? "items-titles items-selected"
                : "items-titles "
            }
            onClick={() => changeItemSelection(index)}
          >
            <div className="items-content">
              <span>{item.name}</span>
            </div>
            <img
              src={require(`images/${item.image}`)}
              alt={item.name}
              style={{ width: 50 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ItemSelection;
