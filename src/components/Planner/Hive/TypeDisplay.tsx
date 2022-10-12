import { useContext, useState, useEffect } from "react";
import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { beeTypeDisplay, giftedBeeTypeDisplay } from "libs/data";
import { Draggable, Droppable } from "react-beautiful-dnd";

function TypeDisplay({
  type,
  giftedCheck,
}: {
  type: number;
  giftedCheck: boolean;
}) {
  const [typeData, setTypeData] = useState<
    {
      name: string;
      id: string;
      image: string;
    }[]
  >();

  const theme = useContext(PlannerThemeContext);

  useEffect(() => {
    switch (type) {
      case 1:
        if (giftedCheck) return setTypeData(giftedBeeTypeDisplay.epic);

        return setTypeData(beeTypeDisplay.epic);

      case 2:
        if (giftedCheck) return setTypeData(giftedBeeTypeDisplay.legendary);

        return setTypeData(beeTypeDisplay.legendary);

      case 3:
        if (giftedCheck) return setTypeData(giftedBeeTypeDisplay.mythic);

        return setTypeData(beeTypeDisplay.mythic);

      case 4:
        if (giftedCheck) return setTypeData(giftedBeeTypeDisplay.event);

        return setTypeData(beeTypeDisplay.event);

      default:
        if (giftedCheck) return setTypeData(giftedBeeTypeDisplay.rare);

        return setTypeData(beeTypeDisplay.rare);
    }
  }, [type, giftedCheck]);

  return (
    <Droppable droppableId="bees" direction="horizontal" isDropDisabled={true}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={theme ? "type-container dark-info" : "type-container"}
        >
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
                    <img
                      className="type-image"
                      src={require(`images/Hive/${bee.image}`)}
                      alt={bee.name}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          <div style={{ display: "none" }}>{provided.placeholder}</div>
        </div>
      )}
    </Droppable>
  );
}

export default TypeDisplay;
