
import Footer from "./Components/Footer";
import Navbar1 from "./Components/Nav";
import Navbar from "./Components/Navbar";
import Top from "./Components/TopButton";

import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  title: "The best quality products",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Navbar/>
        <Navbar1/>
        <Top/>
          {children}
          <Footer/>
          </AuthProvider>
      </body>
    </html>
  );
}