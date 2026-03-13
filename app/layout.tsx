import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theoandsheila.xyz"),
  title: "Sheila's Seoul Edit",
  description:
    "A private Seoul guide from Theo to Sheila: soulful food, quieter hanok moments, and hidden gems that feel unmistakably Korean.",
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
    title: "Sheila's Seoul Edit",
    description:
      "Theo's private Seoul shortlist for Sheila, built around soulful meals, local atmosphere, and the quieter side of the city.",
    url: "https://theoandsheila.xyz",
    siteName: "Sheila's Seoul Edit",
    images: [
      {
        url: "/images/map/seoul-map-poster.png",
        width: 1200,
        height: 800,
        alt: "Illustrated Seoul map poster from Theo's Seoul guide for Sheila",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheila's Seoul Edit",
    description:
      "Theo's private Seoul shortlist for Sheila, built around soulful meals, local atmosphere, and hidden gems.",
    images: ["/images/map/seoul-map-poster.png"],
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
