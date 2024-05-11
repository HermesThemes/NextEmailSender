// import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import TanstackProvider from "@/tanstackProvider";
import { Providers } from "./providerNextUi";
import Header from "./header";
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/Manrope.ttf' })


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <TanstackProvider>
        <html lang="en">
          <body className={`dark:bg-bgImage ${myFont.className}`}>
            <SessionProvider>
              <Providers>
                <Header/>
                <div className="bg-grid-small-black/[0.2] relative h-[100vh]">
                  {children}
                </div>
              </Providers>
            </SessionProvider>
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"></script>
            <script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/trio.js"></script>
          </body>
        </html>
    </TanstackProvider>
  
   
  );
}

