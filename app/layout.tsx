import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";




const font = Nunito({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // could had written the session here, but for cleaner structure wrote it seperately.
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <Navbar currentUser = {currentUser}/>
        <RegisterModal/>
        <LoginModal/>
        </ClientOnly>
       
        {children}
        </body>
    </html>
  );
}
