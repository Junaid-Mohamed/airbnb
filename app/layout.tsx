import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Moda";



const font = Nunito({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Navbar/>
        <Modal isOpen/>
        </ClientOnly>
       
        {children}
        </body>
    </html>
  );
}
