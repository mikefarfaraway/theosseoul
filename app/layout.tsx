import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheila's Seoul Edit",
  description: "A private Seoul recommendation guide curated for Sheila by Theo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
