import { useState } from "react";
import { HiveSlots } from "libs/data";
import Slots from "./Slots";
import Bees from "./Bees";
import { giftedBeeTypeDisplay, beeTypeDisplay } from "libs/data";
import { DragDropContext } from "react-beautiful-dnd";

function Hive({ descriptionCheck }: { descriptionCheck: () => void }) {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);
  const [giftedCheck, setGiftedCheck] = useState(false);

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

      if (giftedCheck) {
        Object.values(giftedBeeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId) beeSelection.push(bee);
          });
        });
      } else {
        Object.values(beeTypeDisplay).forEach((item) => {
          item.forEach((bee) => {
            if (bee.id === result.draggableId) beeSelection.push(bee);
          });
        });
      }

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

  const selectGifted = () => {
    setGiftedCheck((current) => !current);
  };

  const clearHive = () => {
    setHiveSlots(HiveSlots);
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
        <Bees
          descriptionCheck={descriptionCheck}
          giftedCheck={giftedCheck}
          selectGifted={selectGifted}
        />
        <Slots hiveSlots={hiveSlots} removeFromList={removeFromList} />
      </DragDropContext>
      <div className="planner-btn-container">
        <div className="planner-save">Save</div>
        <div className="inventory-reset-button" onClick={clearHive}>
          Clear
        </div>
      </div>
    </div>
  );
}

export default Hive;
