// tslint:disable-next-line:interface-name
export interface EventDefinition {
  description?: string;
  payload?: string;
}

// tslint:disable-next-line:interface-name
export interface EventDefinitions {
  [key: string]: EventDefinition;
}
// tslint:disable-next-line:array-type
export type EventsLists = { name: string, events: EventDefinitions}[];
