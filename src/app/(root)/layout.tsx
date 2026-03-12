import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { display, sans } from "@/lib/fonts";
import { defaultLocale } from "@/lib/i18n";
import { siteName, siteOrigin } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: siteName,
  description:
    "Cataliza Capital backs craft-led operators with a modern operating hub, catalytic grants, revolving credit, and an impact-minded community.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
