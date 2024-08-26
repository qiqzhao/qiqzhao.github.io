import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "qiqzhao blog.",
  description: "qiqzhao's blog focus oon frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-8 py-4 mx-atuo lg:px-48 flex gap-4 sticky top-0 bg-black text-white text-xl">
          <Link className="hover:opacity-60" href="/">
            HOME
          </Link>
          <Link className="hover:opacity-60" href="/about">
            ABOUT
          </Link>
        </div>
        <div className="mx-auto px-8 mt-8 lg:px-48">{children}</div>
      </body>
    </html>
  );
}
