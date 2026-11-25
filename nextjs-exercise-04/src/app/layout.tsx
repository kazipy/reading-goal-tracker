import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exercise 04 | Server and Client Components",
  description: "A small Next.js project demonstrating Server and Client Components.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}