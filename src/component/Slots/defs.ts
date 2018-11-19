// tslint:disable-next-line:interface-name
export interface SlotDefinition {
  description?: string;
  scope?: string;
  required?: boolean;
}

// tslint:disable-next-line:interface-name
export interface SlotDefinitions {
  [key: string]: SlotDefinition;
}

// tslint:disable-next-line:array-type
export type SlotsLists = { name: string, slots: SlotDefinitions }[];
