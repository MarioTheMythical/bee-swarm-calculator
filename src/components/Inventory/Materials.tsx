import { inventoryMaterials } from "../../libs/data";

function Materials() {
  return (
    <div>
      {" "}
      <div className="inventory-items-container">
        {inventoryMaterials.map((item, index) => {
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
    </div>
  );
}

export default Materials;
