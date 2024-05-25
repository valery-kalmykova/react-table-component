import styles from "./page.module.css";
import Table from "./components/table";
import { initialColumns, row } from "@/data/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <Table items={row} cols={initialColumns} />
    </main>
  );
}
