"use client";
import { notFound, usePathname } from "next/navigation";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  if (path === "/") {
    notFound();
  }

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto w-full relative">
          <Navbar />
          {/* Add empty to all paths except home page */}
          {path !== "/" && <div className="h-28 "></div>}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
