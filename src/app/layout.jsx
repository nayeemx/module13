"use client";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbeer from "./../component/Navbeer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbeer />
        {children}
      </body>
    </html>
  );
}
