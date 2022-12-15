import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { DashboardLayout } from "../layout/DashboardLayout";

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/dashboard/")) {
    return (
      <SessionProvider session={pageProps.session}>
        <DashboardLayout>
          <Head>
            <title>Chefy</title>
            <meta name="description" content="Chefy - We love cooking" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />;
        </DashboardLayout>
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
