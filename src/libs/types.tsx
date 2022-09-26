export type itemTypes = {
  name: string;
  image: string;
}[];

type subRecipe = {
  material: string;
  value: number;
  image: string;
};

type recipeMaterial = {
  material: string;
  value: number;
  image: string;
  subRecipe?: subRecipe[];
};

export type recipe = {
  [key: string]: recipeMaterial[];
}[];
