import "@/styles/globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "@/app/providers";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Chefy",
  description: "Chefy - Because we love cooking",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html
        lang="en"
        className={cn("min-h-screen bg-background", quicksand.className)}
      >
        <body>{children}</body>
      </html>
    </Providers>
  );
}
