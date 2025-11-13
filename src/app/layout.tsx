import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Career Pathway (CPS)",
  description:
    "Best HPAS & HAS Coaching in Shimla. CPS provides Study Material, Job Alerts, E-Learning and Government Exam Preparation.",
  metadataBase: new URL("https://www.thecareerspathway.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

      

        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
