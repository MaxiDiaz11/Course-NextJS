import { Navbar } from "../Navbar";
import { FC } from "react";
import Head from "next/head";
import styles from "../Layouts/MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
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
