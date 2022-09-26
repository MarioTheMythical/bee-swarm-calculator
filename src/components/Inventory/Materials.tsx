import { useState, useEffect } from "react";
import { inventoryMaterials } from "libs/data";

function Materials() {
  const [itemQuantity, setItemQuantity] = useState<number[]>([]);

  const changeItemQuantity = (name: string, value: string) => {
    if ((Number(value) >= 0 && value) || value === "") {
      localStorage.setItem(name, JSON.stringify(value));
    }
  };

  useEffect(() => {
    const initialItemQuantity = () => {
      let quantity: number[] = [];
      inventoryMaterials.forEach((item) => {
        if (localStorage.getItem(item.name)) {
          quantity?.push(
            Number(JSON.parse(localStorage.getItem(item.name) || ""))
          );
        } else {
          quantity?.push(0);
        }
      });
      setItemQuantity(quantity);
    };
    initialItemQuantity();
  }, []);

  return (
    <div className="inventory-items-container">
      {inventoryMaterials.map((item, index) => {
        return (
          <div key={index} className="inventory-items-content">
            <img
              src={require(`images/${item.image}`)}
              alt={item.name}
              style={{ width: 50 }}
            />
            <div className="inventory-items-input-container">
              <input
                type="number"
                placeholder={
                  itemQuantity.length > 0 ? String(itemQuantity[index]) : "0"
                }
                className="inventory-items-input"
                onChange={(event) =>
                  changeItemQuantity(item.name, event.target.value)
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Materials;
