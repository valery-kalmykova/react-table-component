import Time from "./time";
import { Column, Row } from "@/types/types";
import TableHead from "./table-head";
import TableRow from "./table-row";

interface Props {
  items: Row[];
  cols: Column[];
}

const Table = ({ items, cols }: Props) => {
  return (
    <div>
      <Time />
      <table>
        <thead>
          <TableHead cols={cols} />
        </thead>
        <tbody>
          {items.map((values: Row, index: number) => {
            return <TableRow values={values} key={`row-${index}`} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
