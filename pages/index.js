import Head from "next/head";
import useSWR from "swr";
import { Switch } from "ui-neumorphism";

import styles from "../styles/Home.module.css";
import httpClient from "../utils/api";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  // const { data, error } = useSWR("/api/videos", fetcher);
  // console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>EPaper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="theme--light">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Switch color="var(--error)" checked label="Switch" />
        <form method="post" encType="multipart/form-data" action="/api/upload">
          <input type="file" accept="image/*" name="file" />
          <input type="submit" value="Submit" />
        </form>
        <button
          onClick={() => {
            httpClient.post("action", { type: "shutdown", base: "shut" });
          }}
        >
          Shutdown
        </button>
      </main>
    </div>
  );
}
