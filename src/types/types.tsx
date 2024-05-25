export type Column = string;

export enum STATE_TYPE {
  danger = "red",
  warning = "yellow",
  normal = "green",
}

export type Row = {
  field1: any[];
  state?: STATE_TYPE;
};
