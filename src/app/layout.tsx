import "@/styles/globals.css";

import type { PropsWithChildren } from "react";

import type { Metadata } from "next";

import { Quicksand } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Chefy",
  description: "Chefy - Explore reci pes from around the world",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={quicksand.className} lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
