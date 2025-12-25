import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
    
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
        <button onClick={toggleTheme} className={
            cn(
                "fixed max-sm:hidden top-3 right-3 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline:hidden"
            )
        }>
            { isDarkMode ? 
                <Sun className="h-6 w-6 text-yellow-300"/> 
                : 
                <Moon className="w-6 h-6 text-blue-900"/> 
            }
        </button>
    )
}