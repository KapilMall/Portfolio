import type { LucideIcon } from "lucide-react"

interface ButtonProps {
    name?: string,
    icon?: LucideIcon,
    borderRadius: number,
    backgroundColor: string,
    color: string,
}

export const Button:React.FC<ButtonProps> = ({ name, icon: Icon, borderRadius, backgroundColor, color }) => {
    return (
        <div className="flex gap-[10px] px-[12px] py-[8px] justify-center align-middle cursor-pointer" style={{ backgroundColor: backgroundColor, borderRadius: borderRadius, color: color }}>
            { Icon && <Icon /> }
            { name && name }
        </div>
    )
}