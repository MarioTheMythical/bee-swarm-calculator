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
            {(provided) => (
              <div
                className="hive-slot"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {hive.name}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}
    </div>
  );
}

export default Slots;
