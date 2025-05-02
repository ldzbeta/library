import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react"; //ReactNode is a type provided by React in TypeScript. It represents anything that can be rendered inside a React component (e.g., strings, numbers, JSX, arrays, etc.).
import {SessionProvider} from "next-auth/react"
import { Toaster } from "@/components/toaster";
import { auth } from "@/auth";

const ibmPlexSans = localFont({ 
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
}); //to import custom fonts
const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebase-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is a book borrowing university library management solution.",
};

const RootLayout = async({ children }: { children: ReactNode }) => {
  
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>

      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
        {children}
        <Toaster />
      </body>
        </SessionProvider>
    </html>
  );
};
//SessionProvider - context provider - Keeps the authentication state globally accessible.
export default RootLayout;
