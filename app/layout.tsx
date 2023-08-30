"use client";
import { notFound, usePathname } from "next/navigation";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const isStudioPath = path?.includes("studio");

  if (isStudioPath) {
    return (
       <html lang="en">
      <head />
      <body>
        <div className="mx-auto w-full relative">
          {children}
        </div>
      </body>
    </html>
    )
  }

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto w-full relative">
          <Navbar />
          <Sidebar />
          {/* Add empty to all paths except home page */}
          {path !== "/" && <div className="h-28 "></div>}
          {children}
          <Footer />
        </div>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="https://js-eu1.hs-scripts.com/141052168.js"
        ></script>
      </body>
    </html>
  );
}
