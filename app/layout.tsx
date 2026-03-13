import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theoandsheila.xyz"),
  title: "Theo's Seoul Guide for Sheila — 85 Places to Love",
  description:
    "from cozy hidden gems to iconic must-visits. A love letter to the city, made by Theo.",
  applicationName: "Sheila's Seoul Edit",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Theo's Seoul Guide for Sheila — 85 Places to Love",
    description: "from cozy hidden gems to iconic must-visits. A love letter to the city, made by Theo.",
    url: "https://theoandsheila.xyz",
    siteName: "Sheila's Seoul Edit",
    images: [
      {
        url: "/images/map/og-seoul-guide.png",
        width: 1200,
        height: 630,
        alt: "Illustrated Seoul guide map with Theo's portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theo's Seoul Guide for Sheila — 85 Places to Love",
    description: "from cozy hidden gems to iconic must-visits. A love letter to the city, made by Theo.",
    images: ["/images/map/og-seoul-guide.png"],
  },
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
