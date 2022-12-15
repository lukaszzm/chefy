import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../layout/Layout";

const protectedRoutes = ["/explore", "/likes", "/settings"];

export default function App({ Component, pageProps, router }: AppProps) {
  if (protectedRoutes.includes(router.pathname)) {
    return (
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Head>
            <title>Chefy</title>
            <meta name="description" content="Chefy - We love cooking" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Chefy</title>
        <meta name="description" content="Chefy - We love cooking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
