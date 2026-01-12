import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ( {children}: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
      
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        } else {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
                localStorage.setItem("theme", "dark")
            }
        }
      
        useEffect(() => {
            const storedTheme = localStorage.getItem("theme");
      
            if ( storedTheme === "dark" ) {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        }, [])   

        return (
            <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        )
} 

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(context === undefined) {
        throw new Error("UseTheme must be used within a ThemeProvider");
    }

    return context;
}
