import React from "react";
import { montserrat } from "../fonts/font";
import Header from "@/components/layout/Header";
import Particles from "@/components/ui/Particles";
import "./layout.css";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Syed Rumman Akhtar",
  description: "Portfolio of Syed Muhammad Saquib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" style={{ scrollBehavior: 'smooth' }}>
      <body className={montserrat.className}>
        <Particles />
        <Header />
        {children}
      </body>
    </html>
  );
}