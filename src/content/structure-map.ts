export type StructureMapLayer = {
  title: string;
  items: string[];
};

export type StructureMapCopy = {
  title: string;
  intro: string;
  note: string;
  alt: string;
  layers: StructureMapLayer[];
};
