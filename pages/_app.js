import { useEffect } from "react";
import Head from "next/head";

// bootsrap css
import "bootstrap/dist/css/bootstrap.min.css";
// antd css
import "antd/dist/antd.css";
// global css
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Drivus Customer Relationship Management System"
        />
        <meta name="author" content="Semicolon Dev" />
        <meta
          name="keyword"
          content="Drivus, Semicolon IT Solutions, Car, Drive"
        />
        <title>Drivus | Drive your Freedom</title>
        <link rel="shortcut icon" href="img/brand/logo.png"></link>
      </Head>
      {Component.getLayout ? (
        <Component.getLayout>
          <Component {...pageProps} />
        </Component.getLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
