// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";


import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       
    <html lang="en">
      <body>      
          {children}
      </body>
    </html>
  );
}
