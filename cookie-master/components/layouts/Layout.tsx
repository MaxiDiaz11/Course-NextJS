import React, { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head children={undefined}></Head>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
