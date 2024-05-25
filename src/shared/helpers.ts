export function isNumber(x: any): x is number {
  return typeof x === "number";
}

export function isString(x: any): x is string {
  return typeof x === "string";
}

export function isBoolean(x: any): x is boolean {
  return typeof x === "boolean";
}

export function isStringArray(array: string[]): array is string[] {
  return typeof array[0] === "string";
}

export function listToString(values: string[]) {
  const newarr = values.map((value) => {
    return `∙ ${value}; `;
  });
  return newarr.toString().replace(",", "\n");
}
