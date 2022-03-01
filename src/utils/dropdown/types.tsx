export interface ValueType {
  value: string;
  label: string;
}

export interface ActionMeta {
  action: string;
  name?: string;
  option?: unknown;
  removedValues?: readonly ValueType[];
}
