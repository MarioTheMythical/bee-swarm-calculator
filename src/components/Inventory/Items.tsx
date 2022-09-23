import { inventoryItems } from "../../libs/data";

function Items() {
  return (
    <div className="inventory-items-container">
      {inventoryItems.map((item, index) => {
        return (
          <div key={index} className="inventory-items-content">
            <img
              src={require(`../../images/${item.image}`)}
              alt={item.name}
              style={{ width: 50 }}
            />
            <div className="inventory-items-input-container">
              <input className="inventory-items-input" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
