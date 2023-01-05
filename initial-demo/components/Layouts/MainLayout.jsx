import { Navbar } from "../../components/Navbar";
import styles from "../Layouts/MainLayout.module.css";
import Head from "next/head";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>About - Maxi</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
