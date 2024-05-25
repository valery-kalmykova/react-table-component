"use client";

import styles from "./table.module.css";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getTime() {
      setLoading(true);
      await fetch("api/time")
        .then((res) => res.json())
        .then((data: number) => {
          let date = new Date(data).toLocaleTimeString([], {
            timeStyle: "short",
          });
          setTime(date);
        })
        .catch((err: Error) => {
          console.log(err);
          setTime("Ошибка времени");
        })
        .finally(() => setLoading(false));
    }
    getTime();
    const id = setInterval(getTime, 60000);
    return () => clearInterval(id);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <p className={styles.time}>{time}</p>
      </div>
    );
  }
}
