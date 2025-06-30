'use client'
import React, { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
 //decare value one is theme and is always retrun 2 value and 2nd is  a function  and it's void type function this type function no retrun only set value
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// create context with export 
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});;

 const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  //  usesate to find theme and set theme
  const [theme, setTheme] = useState<Theme>("light");

// find theme in localstorge 
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    // if get theme then set as a given value
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

//  all ready set theme then toggle the theme color 
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

 //click this function all time change the localstorge value
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  // context all value store in object it's help to organize all value
const themeInfo ={theme, toggleTheme}
  return (
    // set context provider
    <ThemeContext.Provider value={themeInfo}>

  {/* when we use this context it's wrap our all components or page  */}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
