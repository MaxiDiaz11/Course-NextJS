import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>About - Maxi</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.tittle}>
          Ir a <Link href={"/"}>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.tsx</code>
        </p>
      </main>
    </>
  );
}
