import { useState, useEffect } from "react";
import { maskRecipes, tools } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Tools() {
  const [toolSelection, setToolSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    maskRecipes[0].honey
  );

  useEffect(() => {
    switch (toolSelection) {
      case 0:
        return setRecipeData(maskRecipes[0].honey);

      case 1:
        return setRecipeData(maskRecipes[1].gummy);

      case 2:
        return setRecipeData(maskRecipes[2].diamond);

      case 3:
        return setRecipeData(maskRecipes[3].demon);
    }
  }, [toolSelection]);

  const changeToolSelection = (selection: number) => {
    setToolSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={tools}
        itemSelection={toolSelection}
        changeItemSelection={changeToolSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Tools;
