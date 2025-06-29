import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/contexts/ThemeProvider";







export const metadata: Metadata = {
  title: "Shawon-Raintor-project",
  description: "Made this site for assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='light'  lang="en">
      <head>
       <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sporting-grotesque" />
      </head>
      <body
      style={{ fontFamily: 'Sporting Grotesque, sans-serif' }}
      >
     <ThemeProvider>
      <div className=" relative    mx-auto">
          <div className="sticky  top-0 z-50 right-0 left-0 mx-auto  dark:bg-black dark:text-white bg-white backdrop-blur-lg">
        <Navbar></Navbar>
        </div>
        
       <div className=""> {children}</div>
      
        </div>
     </ThemeProvider>
       
      </body>
    </html>
  );
}
