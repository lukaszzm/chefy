import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../layout/Layout";
import NextProgress from "next-progress";

const protectedRoutes = ["/explore", "/likes", "/settings"];

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Chefy</title>
        <meta name="description" content="Chefy - Because we love cooking" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NextProgress height="5px" color="#3CA83C" />
      {protectedRoutes.includes(router.pathname) ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
