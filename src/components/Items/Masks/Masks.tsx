import { useState } from "react";
import Demon from "./Demon";
import Diamond from "./Diamond";
import Gummy from "./Gummy";
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
      {maskSelection === 0 && <Gummy />}
      {maskSelection === 1 && <Diamond />}
      {maskSelection === 2 && <Demon />}
    </div>
  );
}

export default Masks;
