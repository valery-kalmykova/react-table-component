import styles from "./table.module.css";
import { Column } from "@/types/types";

interface TableHeadProps {
  cols: Column[];
}

const TableHead = ({ cols }: TableHeadProps) => {
  return (
    <tr>
      {cols.map((item: Column, index: number) => {
        return (
          <th key={`thead-${index}`} className={styles.tableHeaderCell}>
            {item}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHead;
