import { beeTypes } from "libs/data";

function Bees() {
  return (
    <div className="bees-container">
      <div className="bees-type-container">
        {beeTypes.map((type, index) => {
          return (
            <div key={index} className="bees-button">
              {type}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bees;
