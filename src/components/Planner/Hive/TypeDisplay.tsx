import { useState, useEffect } from "react";
import { beeTypeDisplay } from "libs/data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function TypeDisplay({ type }: { type: number }) {
  const [typeData, setTypeData] = useState<
    {
      name: string;
      id: string;
      image: string;
    }[]
  >();

  const onBeforeCapture = () => {};
  const onBeforeDragStart = () => {};
  const onDragStart = () => {};
  const onDragUpdate = () => {};
  const onDragEnd = () => {};

  useEffect(() => {
    switch (type) {
      case 1:
        return setTypeData(beeTypeDisplay.epic);

      case 2:
        return setTypeData(beeTypeDisplay.legendary);

      case 3:
        return setTypeData(beeTypeDisplay.mythic);

      case 4:
        return setTypeData(beeTypeDisplay.event);

      default:
        return setTypeData(beeTypeDisplay.rare);
    }
  }, [type]);

  return (
    <Droppable droppableId="bees">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {typeData?.map((bee, index) => {
            return (
              <Draggable key={bee.id} draggableId={bee.id} index={index}>
                {(provided) => (
                  <div
                    key={index}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {bee.name}
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TypeDisplay;
