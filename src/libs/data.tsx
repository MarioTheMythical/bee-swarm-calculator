import { itemTypes, recipe } from "./types";

export const inventoryItems: itemTypes = [
  {
    name: "Honey",
    image: "Honey.png",
  },
  {
    name: "RedExtract",
    image: "Red_Extract.png",
  },
  {
    name: "BlueExtract",
    image: "Blue_Extract.png",
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
    name: "TropicalDrink",
    image: "TropicalDrink.png",
  },
  {
    name: "PurplePotion",
    image: "PurplePotion.png",
  },
  {
    name: "SoftWax",
    image: "SoftWax.png",
  },
  {
    name: "HardWax",
    image: "HardWax.png",
  },
  {
    name: "SwirledWax",
    image: "SwirledWax.png",
  },
  {
    name: "CausticWax",
    image: "CausticWax.png",
  },
  {
    name: "FieldDice",
    image: "FieldDice.png",
  },
  {
    name: "SmoothDice",
    image: "SmoothDice.png",
  },
  {
    name: "LoadedDice",
    image: "LoadedDice.png",
  },
  {
    name: "Turpentine",
    image: "Turpentine.png",
  },
  {
    name: "SuperSmoothie",
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
    name: "MagicBeans",
    image: "MagicBeans.png",
  },
  {
    name: "Moon",
    image: "Moon.png",
  },
  {
    name: "RoyalJelly",
    image: "RoyalJelly.png",
  },
  {
    name: "StarJelly",
    image: "StarJelly.png",
  },
  {
    name: "GoldEggs",
    image: "GoldEgg.png",
  },
  {
    name: "DiamondEggs",
    image: "DiamondEgg.png",
  },
  {
    name: "SpiritPetal",
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
];
