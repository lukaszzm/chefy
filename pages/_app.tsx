import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import NextProgress from "next-progress";

const protectedRoutes = ["/explore", "/likes", "/settings"];

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Chefy</title>
        <meta name="description" content="Chefy - Because we love cooking" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <NextProgress height="5px" color="#3CA83C" />
      {protectedRoutes.includes(router.pathname) ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
