import styles from "./table.module.css";
import {
  isBoolean,
  isNumber,
  isString,
  isStringArray,
  listToString,
} from "@/shared/helpers";

const tableCell = ({ value }: any) => {
  if (isString(value)) {
    if (value.includes("http")) {
      return (
        <th className={styles.tableCell}>
          <a href={value} target="_blank">
            {value}
          </a>
        </th>
      );
    } else {
      return <th className={styles.tableCell}>{value}</th>;
    }
  }

  if (isBoolean(value)) {
    if (value === true) {
      return <th className={styles.tableCell}>&#x2611;</th>;
    } else {
      return <th className={styles.tableCell}>&#x2610;</th>;
    }
  }

  if (isNumber(value)) {
    return <th className={styles.tableCell}>{value}</th>;
  }

  if (value instanceof Date) {
    return (
      <th className={styles.tableCell}>{value.toISOString().split("T")[0]}</th>
    );
  }

  if (isStringArray(value)) {
    return <th className={styles.tableCell}>{listToString(value)}</th>;
  }

  return <th className={styles.tableCell}>Error type</th>;
};

export default tableCell;
