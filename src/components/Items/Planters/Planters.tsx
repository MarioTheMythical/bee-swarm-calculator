import { useState, useEffect } from "react";
import { planterRecipes, boots, planters } from "libs/data";
import Recipe from "../RecipeDisplays/Recipe";
import ItemSelection from "../ItemSelection";
import { recipeMaterial } from "libs/types";

function Boots() {
  const [planterSelection, setPlanterSelection] = useState(0);
  const [recipeData, setRecipeData] = useState<recipeMaterial[]>(
    planterRecipes[0].candy
  );

  useEffect(() => {
    switch (planterSelection) {
      case 0:
        return setRecipeData(planterRecipes[0].candy);

      case 1:
        return setRecipeData(planterRecipes[1].blue);

      case 2:
        return setRecipeData(planterRecipes[2].red);

      case 3:
        return setRecipeData(planterRecipes[3].tacky);

      case 4:
        return setRecipeData(planterRecipes[4].pesticide);

      case 5:
        return setRecipeData(planterRecipes[5].petal);
    }
  }, [planterSelection]);

  const changePlanterSelection = (selection: number) => {
    setPlanterSelection(selection);
  };

  return (
    <div className="masks-container">
      <ItemSelection
        itemData={planters}
        itemSelection={planterSelection}
        changeItemSelection={changePlanterSelection}
      />
      <Recipe recipeData={recipeData} />
    </div>
  );
}

export default Boots;
