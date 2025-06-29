import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/contexts/ThemeProvider";
import Footer from "@/components/footer/Footer";







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
    <html data-theme='light' lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sporting-grotesque" />
      </head>
      <body
        style={{ fontFamily: 'Sporting Grotesque, sans-serif' }} >
        {/* layout start here  */}
        {/* // context api provider start here  */}
        <ThemeProvider>
          <div className=" relative    mx-auto">
            {/* header section start here  */}
            <header className="sticky  top-0 z-50 right-0 left-0 mx-auto  dark:bg-black dark:text-white bg-white backdrop-blur-lg">
              <Navbar></Navbar>
            </header>
            {/* header section end here  */}

            {/* Outlet start here  */}
            <main className=""> {children}</main>
            {/* Outlet end here  */}

            {/* footer section start here  */}
            <footer><Footer></Footer></footer>
            {/* footer section end here  */}

          </div>
        </ThemeProvider>
        {/* // context api provider end here  */}
        {/* layout end here  */}

      </body>
    </html>
  );
}
