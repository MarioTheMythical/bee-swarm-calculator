import { itemTypes, recipe } from "./types";

// ITEMS //

export const inventoryItems: itemTypes = [
  {
    name: "Honey",
    image: "Honey.png",
  },
  {
    name: "Red Extract",
    image: "RedExtract.png",
  },
  {
    name: "Blue Extract",
    image: "BlueExtract.png",
  },
  {
    name: "Enzymes",
    image: "Enzymes.png",
  },
  {
    name: "Oil",
    image: "Oil.png",
  },
  {
    name: "Glue",
    image: "Glue.png",
  },
  {
    name: "Gumdrops",
    image: "Gumdrops.png",
  },
  {
    name: "Glitter",
    image: "Glitter.png",
  },
  {
    name: "Tropical Drink",
    image: "TropicalDrink.png",
  },
  {
    name: "Soft Wax",
    image: "SoftWax.png",
  },
  {
    name: "Hard Wax",
    image: "HardWax.png",
  },
  {
    name: "Swirled Wax",
    image: "SwirledWax.png",
  },
  {
    name: "Caustic Wax",
    image: "CausticWax.png",
  },
  {
    name: "Field Dice",
    image: "FieldDice.png",
  },
  {
    name: "Smooth Dice",
    image: "SmoothDice.png",
  },
  {
    name: "Loaded Dice",
    image: "LoadedDice.png",
  },
  {
    name: "Purple Potion",
    image: "PurplePotion.png",
  },
  {
    name: "Turpentine",
    image: "Turpentine.png",
  },
  {
    name: "Super Smoothies",
    image: "SuperSmoothie.png",
  },
];

// MATERIALS //

export const inventoryMaterials: itemTypes = [
  {
    name: "Strawberries",
    image: "Strawberries.png",
  },
  {
    name: "Blueberries",
    image: "Blueberries.png",
  },
  {
    name: "Pineapples",
    image: "Pineapples.png",
  },
  {
    name: "Sunflower Seeds",
    image: "SunflowerSeeds.png",
  },
  {
    name: "Neonberries",
    image: "NeonBerries.png",
  },
  {
    name: "Bitterberries",
    image: "Bitterberries.png",
  },
  {
    name: "Coconuts",
    image: "Coconuts.png",
  },
  {
    name: "Moon Charms",
    image: "Moon.png",
  },
  {
    name: "Treats",
    image: "Treats.png",
  },
  {
    name: "Stingers",
    image: "Stingers.png",
  },
  {
    name: "Honeysuckle",
    image: "HoneySuckle.png",
  },
  {
    name: "Magic Bean",
    image: "MagicBean.png",
  },
  {
    name: "Royal Jelly",
    image: "RoyalJelly.png",
  },
  {
    name: "Star Jelly",
    image: "StarJelly.png",
  },
  {
    name: "Gold Eggs",
    image: "GoldEgg.png",
  },
  {
    name: "Diamond Eggs",
    image: "DiamondEgg.png",
  },
  {
    name: "Spirit Petal",
    image: "SpiritPetal.png",
  },
];

// MASKS //

export const masks: itemTypes = [
  {
    name: "Honey",
    image: "HoneyMask.png",
  },
  {
    name: "Gummy",
    image: "GummyMask.png",
  },
  {
    name: "Diamond",
    image: "DiamondMask.png",
  },
  {
    name: "Demon",
    image: "DemonMask.png",
  },
];

export const maskRecipes: recipe = [
  {
    honey: [
      { material: "Honey", value: 100000000, image: "Honey.png" },
      { material: "Treats", value: 9999, image: "Treats.png" },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 25,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Gold Eggs", value: 5, image: "GoldEgg.png" },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 250,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 100,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
  {
    diamond: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 150,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Diamond Eggs", value: 5, image: "DiamondEgg.png" },
    ],
  },
  {
    demon: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 150,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },

      { material: "Stingers", value: 500, image: "Stingers.png" },
    ],
  },
];

// TOOLS //

export const tools: itemTypes = [
  {
    name: "Petal Wand",
    image: "PetalWand.png",
  },
  {
    name: "Tide Popper",
    image: "TidePopper.png",
  },
  {
    name: "Dark Scythe",
    image: "DarkScythe.png",
  },
  {
    name: "Gummy Baller",
    image: "GummyBaller.png",
  },
];

export const toolRecipes: recipe = [
  {
    petal: [
      { material: "Honey", value: 1500000000, image: "Honey.png" },
      {
        material: "Enzymes",
        value: 75,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      {
        material: "Star Jelly",
        value: 10,
        image: "StarJelly.png",
      },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
  {
    tide: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 1500,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 150,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 75,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Purple Potion",
            value: 9,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
  {
    scythe: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 1500,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 150,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 33,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 10000000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 1500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 10,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 5,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honeysuckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 10,
            image: "StarJelly.png",
          },
        ],
      },
    ],
  },
];

// BAGS //

export const bags: itemTypes = [
  {
    name: "Coconut Canister",
    image: "CoconutCanister.png",
  },
];

export const bagRecipes: recipe = [
  {
    coconut: [
      { material: "Honey", value: 25000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },

      {
        material: "Red Extract",
        value: 150,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 150,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
];

// GUARDS //

export const guards: itemTypes = [
  {
    name: "Bucko",
    image: "BuckoGuard.png",
  },
  {
    name: "Riley",
    image: "RileyGuard.png",
  },
  {
    name: "Cobalt",
    image: "CobaltGuard.png",
  },
  {
    name: "Crimson",
    image: "CrimsonGuard.png",
  },
];

export const guardRecipes: recipe = [
  {
    bucko: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Blueberries", value: 100, image: "Blueberries.png" },
      {
        material: "Blue Extract",
        value: 10,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Moon Charms", value: 75, image: "Moon.png" },
    ],
  },
  {
    riley: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Strawberries", value: 100, image: "Strawberries.png" },
      {
        material: "Red Extract",
        value: 10,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 25, image: "Stingers.png" },
    ],
  },
  {
    cobalt: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 100,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
  {
    crimson: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 100,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
];

// BELTS //

export const belts: itemTypes = [
  {
    name: "Mondo",
    image: "MondoBelt.png",
  },
  {
    name: "Honey",
    image: "HoneycombBelt.png",
  },
  {
    name: "Petal",
    image: "PetalBelt.png",
  },
];

export const beltRecipes: recipe = [
  {
    mondo: [
      { material: "Honey", value: 12400000, image: "Honey.png" },
      { material: "Pineapples", value: 150, image: "Pineapples.png" },
      { material: "Sunflower Seeds", value: 150, image: "SunflowerSeeds.png" },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    honeycomb: [
      { material: "Honey", value: 75000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 50,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 25,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
    ],
  },
  {
    petal: [
      { material: "Honey", value: 15000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 50,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Star Jelly", value: 25, image: "StarJelly.png" },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
];

// BOOTS //

export const boots: itemTypes = [
  {
    name: "Beekeeper",
    image: "BeekeeperBoots.png",
  },
  {
    name: "Coconut",
    image: "CoconutClogs.png",
  },
  {
    name: "Gummy",
    image: "GummyBoots.png",
  },
];

export const bootRecipes: recipe = [
  {
    beekeeper: [
      { material: "Honey", value: 15000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 3,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 3,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 5,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    coconut: [
      { material: "Honey", value: 10000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 100000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 250,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
];

// PLANTERS //

export const planters: itemTypes = [
  {
    name: "Candy",
    image: "CandyPlanter.png",
  },
  {
    name: "Blue",
    image: "BlueClayPlanter.png",
  },
  {
    name: "Red",
    image: "RedClayPlanter.png",
  },
  {
    name: "Tacky",
    image: "TackyPlanter.png",
  },
  {
    name: "Pesticide",
    image: "PesticidePlanter.png",
  },
  {
    name: "Petal",
    image: "PetalPlanter.png",
  },
];

export const planterRecipes: recipe = [
  {
    candy: [
      { material: "Honey", value: 5000000, image: "Honey.png" },
      {
        material: "Soft Wax",
        value: 3,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Gumdrops",
        value: 30,
        image: "Gumdrops.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 3,
            image: "Blueberries.png",
          },
          {
            material: "Strawberries",
            value: 3,
            image: "Strawberries.png",
          },
          {
            material: "Pineapples",
            value: 3,
            image: "Pineapples.png",
          },
        ],
      },
      { material: "Magic Bean", value: 5, image: "MagicBean.png" },
    ],
  },
  {
    blue: [
      { material: "Honey", value: 10000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 15,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 5, image: "MagicBean.png" },
    ],
  },
  {
    red: [
      { material: "Honey", value: 10000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 15,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 5, image: "MagicBean.png" },
    ],
  },
  {
    tacky: [
      { material: "Honey", value: 50000000, image: "Honey.png" },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 5,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Purple Potion",
        value: 1,
        image: "PurplePotion.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Red Extract",
            value: 3,
            image: "RedExtract.png",
          },
          {
            material: "Blue Extract",
            value: 3,
            image: "BlueExtract.png",
          },
          {
            material: "Glue",
            value: 3,
            image: "Glue.png",
          },
        ],
      },
      { material: "Magic Bean", value: 10, image: "MagicBean.png" },
    ],
  },
  {
    pesticide: [
      { material: "Honey", value: 750000000, image: "Honey.png" },
      { material: "Neonberries", value: 25, image: "NeonBerries.png" },
      {
        material: "Glue",
        value: 15,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 5,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 3,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 25, image: "MagicBean.png" },
    ],
  },
  {
    petal: [
      { material: "Honey", value: 5000000000000, image: "Honey.png" },
      { material: "Neonberries", value: 25, image: "NeonBerries.png" },
      {
        material: "Soft Wax",
        value: 250,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 50,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Purple Potion",
            value: 6,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 25,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 100, image: "MagicBean.png" },
    ],
  },
];

export const beeTypes = ["Rare", "Epic", "Legendary", "Mythic", "Event"];

export const beeTypeDisplay = {
  rare: [{ name: "Basic", id: "1", image: "BasicBee.png" }],
  epic: [{ name: "epic", id: "2", image: "GiftedBasicBee.png" }],
  legendary: [{ name: "legend", id: "3", image: "EmptyHive.png" }],
  mythic: [{ name: "mythic", id: "4", image: "EmptyHive.png" }],
  event: [{ name: "event", id: "5", image: "EmptyHive.png" }],
};

export const HiveSlots = [
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
];
