import styles from "./table.module.css";
import { Row } from "@/types/types";
import TableCell from "./table-cell";

interface ItemsProps {
  values: Row;
}

const TableRow = ({ values }: ItemsProps) => {
  return (
    <tr
      className={styles.tableRow}
      style={{ backgroundColor: `${values.state}` }}
    >
      {values.field1.map((value: string, index: number) => {
        return <TableCell value={value} key={`table-cell-${index}`} />;
      })}
    </tr>
  );
};

export default TableRow;
