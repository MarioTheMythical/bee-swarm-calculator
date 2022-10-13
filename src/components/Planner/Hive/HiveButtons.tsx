import { useEffect, useState } from "react";
import { giftedBeeTypeDisplay, beeTypeDisplay, HiveSlots } from "libs/data";

function HiveButtons({
  clearHive,
  hiveSlots,
}: {
  clearHive: () => void;
  hiveSlots: {
    name: string;
    id: string;
    image: string;
  }[];
}) {
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
    <div className="planner-btn-container">
      <div className="planner-btn planner-save">Save</div>
      <div className="planner-btn planner-load">Load</div>
      <div className="inventory-reset-button" onClick={clearHive}>
        Clear
      </div>
    </div>
  );
}

export default HiveButtons;
