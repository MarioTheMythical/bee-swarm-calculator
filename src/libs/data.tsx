import { itemTypes, recipe } from "./types";

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
    name: "Purple Potion",
    image: "PurplePotion.png",
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
    name: "Turpentine",
    image: "Turpentine.png",
  },
  {
    name: "Super Smoothie",
    image: "SuperSmoothie.png",
  },
];

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
    name: "Coconuts",
    image: "Coconuts.png",
  },
  {
    name: "Magic Bean",
    image: "MagicBean.png",
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
    name: "Royal Jelly",
    image: "RoyalJelly.png",
  },
  {
    name: "Star Jelly",
    image: "StarJelly.png",
  },
  {
    name: "Stingers",
    image: "Stingers.png",
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
      { material: "Stingers", value: 500, image: "Stingers.png" },
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
    ],
  },
];
