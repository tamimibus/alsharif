import Head from "next/head";
import Header from "./Header.js";
// import Footer from './Footer.jsx'
import React from "react";
import style from "../styles/Header.module.css";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";
const Layout = (props) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>

      <Header />

      <div className={`${style.layoutPadding} ${props.className}`}>
        {props.children}
      </div>

      <Footer />
      <Analytics />
    </>
  );
};

export default React.memo(Layout);
