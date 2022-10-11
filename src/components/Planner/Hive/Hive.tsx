import { useState } from "react";
import { HiveSlots } from "libs/data";
import Slots from "./Slots";
import Bees from "./Bees";
import { DragDropContext } from "react-beautiful-dnd";

function Hive() {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);

  const onBeforeCapture = () => {};
  const onBeforeDragStart = () => {};
  const onDragStart = () => {};
  const onDragUpdate = () => {};
  const onDragEnd = () => {};

  return (
    <div className="hive-container">
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Bees />
        <Slots hiveSlots={hiveSlots} />
      </DragDropContext>
    </div>
  );
}

export default Hive;
