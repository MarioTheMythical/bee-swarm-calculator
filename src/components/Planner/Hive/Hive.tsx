import { useEffect, useState } from "react";
import { HiveSlots } from "libs/data";
import Slots from "./Slots";
import Bees from "./Bees";
import { giftedBeeTypeDisplay, beeTypeDisplay } from "libs/data";
import { DragDropContext } from "react-beautiful-dnd";

function Hive({ descriptionCheck }: { descriptionCheck: () => void }) {
  const [hiveSlots, setHiveSlots] = useState(HiveSlots);
  const [giftedCheck, setGiftedCheck] = useState(false);
  const [hiveCount, setHiveCount] = useState<{ name: string; count: number }[]>(
    []
  );

  useEffect(() => {
    let hive: string[] = [];
    let finalHiveCount: { name: string; count: number }[] = [];

    hiveSlots.forEach((item) => {
      if (!hive.includes(item.name) && item.name !== "") {
        hive.push(item.name);
        finalHiveCount.push({ name: item.name, count: 0 });
      }
    });

    finalHiveCount.forEach((item, index) => {
      finalHiveCount[index].count = hiveSlots.filter(
        (slot) => slot.name === item.name
      ).length;
    });

    setHiveCount(finalHiveCount);
  }, [hiveSlots]);

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

  useEffect(() => {
    const hiveArrayToString = hiveSlots
      .map((item) => {
        if (item.name.includes("★")) {
          return "G" + item.id;
        }
        return item.id;
      })
      .join("-");

    const giftedBees: { name: string; id: string; image: string }[] = [
      ...giftedBeeTypeDisplay.rare,
      ...giftedBeeTypeDisplay.epic,
      ...giftedBeeTypeDisplay.legendary,
      ...giftedBeeTypeDisplay.mythic,
      ...giftedBeeTypeDisplay.event,
    ];

    const normalBees: { name: string; id: string; image: string }[] = [
      ...beeTypeDisplay.rare,
      ...beeTypeDisplay.epic,
      ...beeTypeDisplay.legendary,
      ...beeTypeDisplay.mythic,
      ...beeTypeDisplay.event,
    ];

    const loadHive = hiveArrayToString.split("-").map((item) => {
      if (item === "0") {
        return HiveSlots[0];
      }
      if (item.includes("G")) {
        return giftedBees[Number(item.replace("G", "")) - 1];
      }
      return normalBees[Number(item.replace("G", "")) - 1];
    });
  }, [hiveSlots]);

  // USE FOR COPY EXPORT CODE
  // onClick={() => {
  //   navigator.clipboard.writeText("test");
  // }}

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
      {hiveCount.length > 0 && (
        <div className="planner-hive-count">
          {hiveCount.map((slot, index) => {
            return (
              <div key={index} className="planner-hive-count-content">
                {slot.name}: {slot.count}
              </div>
            );
          })}
        </div>
      )}
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
