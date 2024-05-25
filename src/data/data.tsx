import { Column, Row, STATE_TYPE } from "@/types/types";

export const row: Row[] = [
  { field1: [true], state: STATE_TYPE.normal },
  { field1: [10, "some text", true, ["foo", "bar"]] },
  { field1: [new Date()] },
  { field1: ["https://ya.ru"] },
  { field1: [false], state: STATE_TYPE.danger },
  { field1: [10, "some text", false, ["foo", "bar"]] },
  { field1: [new Date()] },
  { field1: ["https://ya.ru"] },
];

const state = STATE_TYPE.danger;

export const initialColumns: Column[] = [
  "field1",
  "field2",
  "field3",
  "field4",
  "field5",
  "field6",
  "field7",
  "field8",
];
