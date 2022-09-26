import { useState } from "react";
import Demon from "./MaskDisplays/Demon";
import Diamond from "./MaskDisplays/Diamond";
import Gummy from "./MaskDisplays/Gummy";
import Honey from "./MaskDisplays/HoneyMask/Honey";
import MaskSelection from "./MaskSelection";

function Masks() {
  const [maskSelection, setMaskSelection] = useState(0);

  const changeMaskSelection = (selection: number) => {
    setMaskSelection(selection);
  };

  return (
    <div className="masks-container">
      <MaskSelection
        maskSelection={maskSelection}
        changeMaskSelection={changeMaskSelection}
      />
      {maskSelection === 0 && <Honey />}
      {maskSelection === 1 && <Gummy />}
      {maskSelection === 2 && <Diamond />}
      {maskSelection === 3 && <Demon />}
    </div>
  );
}

export default Masks;
