import type { LucideIcon } from "lucide-react"

interface ButtonProps {
    name?: string,
    icon?: LucideIcon,
    borderRadius?: number,
    backgroundColor?: string,
    color?: string,
    handleClick: () => void;
    classname?: string;
}

export const Button:React.FC<ButtonProps> = ({ name, icon: Icon, borderRadius, backgroundColor, color, handleClick, classname }) => {
    return (
        <div
            className={`flex gap-[10px] justify-center items-center cursor-pointer ${classname}`}
            style={{ backgroundColor: backgroundColor, borderRadius: borderRadius, color: color }}
            onClick={handleClick}
        >
            { Icon && <Icon /> }
            { name && name }
        </div>
    )
}