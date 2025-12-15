import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinelist",
  description: "No cinelist você encontra diversos filmes em alta.",
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
