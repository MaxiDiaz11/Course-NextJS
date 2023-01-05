import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Maxi</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>
        <h1>Home Page</h1>
        <h1 className={styles.tittle}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href={"/about"}>About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </>
  );
}
