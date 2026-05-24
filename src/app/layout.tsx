import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHMNX - Tech Solutions",
  description: "Next-generation tech business solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}
