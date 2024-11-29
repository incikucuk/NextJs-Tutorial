import { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import {Inter} from 'next/font/google';

const inter = Inter({subsets:['latin']});
// const inconsolata = Inter({subsets:['latin']});   //font aileleri
// const roboto = Roboto({subsets:['latin'], weight:["400"]});

export const metadata : Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with Typescript and tailwindcss',
  keywords:"Nextjs. Typescript"
}

export default function RootLayout({children}: {children:React.ReactNode}){
  return(
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>

    </html>
  )
}

