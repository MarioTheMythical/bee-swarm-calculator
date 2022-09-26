export type itemTypes = {
  name: string;
  image: string;
}[];

export type recipeMaterial = {
  material: string;
  value: number;
  image: string;
};

export type recipe = {
  [key: string]: recipeMaterial[];
}[];
