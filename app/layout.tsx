import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XFI Ecosystem - Expanded Conscious Existence",
  description: "Multi-dimensional metaverse with tokenized economy spanning 30+ interconnected dimensions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-xfi-darker text-white">
        {children}
      </body>
    </html>
  );
}
