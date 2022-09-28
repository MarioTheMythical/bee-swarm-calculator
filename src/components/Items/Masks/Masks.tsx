import { useState } from "react";
import MaskSelection from "./MaskSelection";
import { maskRecipes } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";

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
      {maskSelection === 0 && <Recipe recipeData={maskRecipes[0].honey} />}
      {maskSelection === 1 && <Recipe recipeData={maskRecipes[1].gummy} />}
      {maskSelection === 2 && <Recipe recipeData={maskRecipes[1].gummy} />}
      {maskSelection === 3 && <Recipe recipeData={maskRecipes[1].gummy} />}
    </div>
  );
}

export default Masks;
