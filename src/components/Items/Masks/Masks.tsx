import { useState, useEffect } from "react";
import { maskRecipes, masks } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Masks() {
  const [maskSelection, setMaskSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    maskRecipes[0].honey
  );

  useEffect(() => {
    switch (maskSelection) {
      case 0:
        return setRecipeData(maskRecipes[0].honey);

      case 1:
        return setRecipeData(maskRecipes[1].gummy);

      case 2:
        return setRecipeData(maskRecipes[2].diamond);

      case 3:
        return setRecipeData(maskRecipes[3].demon);
    }
  }, [maskSelection]);

  const changeMaskSelection = (selection: number) => {
    setMaskSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={masks}
        itemSelection={maskSelection}
        changeItemSelection={changeMaskSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Masks;
