import { useTheme } from "@/lib/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {

    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={
            cn(
                "fixed max-sm:hidden top-3 right-3 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline:hidden cursor-pointer"
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