import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rolls-Royce Motor Cars — Inspiration is the Beginning",
  description:
    "Enter the world of Rolls-Royce Motor Cars. Phantom, Ghost, Cullinan and Spectre — each hand-built at the Home of Rolls-Royce in Goodwood, and Bespoke to your vision.",
  keywords: [
    "Rolls-Royce",
    "Phantom",
    "Ghost",
    "Cullinan",
    "Spectre",
    "Black Badge",
    "Bespoke",
    "luxury motor cars",
  ],
  openGraph: {
    title: "Rolls-Royce Motor Cars",
    description: "A world where extraordinary becomes reality.",
    images: ["/images/hero-ghost-blackbadge.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} bg-obsidian font-body text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
