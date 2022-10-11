import { useState, useEffect } from "react";
import { beeTypeDisplay } from "libs/data";

function TypeDisplay({ type }: { type: number }) {
  const [typeData, setTypeData] = useState<
    {
      name: string;
      id: string;
      image: string;
    }[]
  >();

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
    <div>
      {typeData?.map((bee, index) => {
        return <div>{bee.name}</div>;
      })}{" "}
    </div>
  );
}

export default TypeDisplay;
