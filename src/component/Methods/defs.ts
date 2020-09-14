export interface MethodDefinition {
  description?: string;
  arguments?: string;
}

export interface MethodDefinitions {
  [key: string]: MethodDefinition;
}

export type MethodsLists = { name: string; methods: MethodDefinitions }[];
