// tslint:disable-next-line:interface-name
export interface PropDefinition {
  description?: string;
  default?: string | number | boolean;
  accepted?: string;
  type: string;
  required?: boolean;
}

// tslint:disable-next-line:interface-name
export interface PropDefinitions {
  [key: string]: PropDefinition;
}

// tslint:disable-next-line:array-type
export type PropsLists = { name: string, props: PropDefinitions }[];
