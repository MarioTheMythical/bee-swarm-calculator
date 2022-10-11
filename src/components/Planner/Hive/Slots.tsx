import { Droppable } from "react-beautiful-dnd";

function Slots({
  hiveSlots,
}: {
  hiveSlots: {
    name: string;
    id: string;
    image: string;
  }[];
}) {
  return (
    <div className="hive-slot-container">
      {hiveSlots.map((hive, index) => {
        return (
          <Droppable droppableId={"hive" + index} key={index}>
            {(provided, snapshot) => (
              <div
                className="hive-slot"
                {...provided.droppableProps}
                ref={provided.innerRef}
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
  );
}

export default Slots;
