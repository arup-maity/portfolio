import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Arup Maity - Full Stack Developer",
   description: "Explore the expertise of Arup Maity, an accomplished Full Stack Developer with a focus on Next.js. With a wealth of experience, I bring a proven track record of creating robust and dynamic web applications. Dive into my portfolio to witness the seamless integration of front-end and back-end technologies, showcasing a commitment to excellence in every project. ",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
