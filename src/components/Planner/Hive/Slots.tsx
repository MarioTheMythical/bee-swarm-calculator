import { Droppable } from "react-beautiful-dnd";

function Slots({
  hiveSlots,
  removeFromList,
}: {
  hiveSlots: {
    name: string;
    id: string;
    image: string;
  }[];
  removeFromList: (index: number) => void;
}) {
  return (
    <div className="hive-slot-container-bg">
      <div className="hive-slot-container">
        {hiveSlots.map((hive, index) => {
          return (
            <Droppable droppableId={"hive" + index} key={index}>
              {(provided) => (
                <div
                  className="hive-slot"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  onClick={() => removeFromList(index)}
                >
                  <img
                    src={require(`images/Hive/${hive.image}`)}
                    alt={hive.name}
                  />
                  <div style={{ display: "none" }}>{provided.placeholder}</div>
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </div>
  );
}

export default Slots;
