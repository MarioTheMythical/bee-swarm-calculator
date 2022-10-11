import { useState } from "react";
import { HiveSlots } from "libs/data";
import Slots from "./Slots";
import Bees from "./Bees";
import { beeTypeDisplay } from "libs/data";
import { DragDropContext } from "react-beautiful-dnd";

function Hive() {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);

  const onBeforeCapture = () => {};
  const onBeforeDragStart = () => {};
  const onDragStart = () => {};
  const onDragUpdate = () => {};
  const onDragEnd = (result: any) => {
    if (result.destination.droppableId.includes("hive")) {
      let beeSelection: {
        name: string;
        id: string;
        image: string;
      }[] = [];

      Object.values(beeTypeDisplay).forEach((item) => {
        item.forEach((bee) => {
          if (bee.id === result.draggableId) beeSelection.push(bee);
        });
      });

      addToList(
        beeSelection[0],
        result.destination.droppableId.split("hive")[1]
      );
    }
    return;
  };

  const addToList = (
    bee: {
      name: string;
      id: string;
      image: string;
    },
    index: number
  ) => {
    const newBees = hiveSlots.map((hive, hiveIndex) => {
      if (hiveIndex === Number(index)) {
        return { ...bee };
      }

      return hive;
    });

    setHiveSlots(newBees);
  };

  const removeFromList = (index: number) => {
    const newHive = hiveSlots.map((hive, hiveIndex) => {
      if (hiveIndex === Number(index)) {
        return { name: "", id: "0", image: "EmptyHive.png" };
      }
      return hive;
    });

    setHiveSlots(newHive);
  };

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
        <Slots hiveSlots={hiveSlots} removeFromList={removeFromList} />
      </DragDropContext>
    </div>
  );
}

export default Hive;
