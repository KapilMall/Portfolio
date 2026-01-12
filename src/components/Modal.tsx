import { ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";
import { Carousel } from "./Carousel";
import { useTheme } from "@/lib/ThemeContext";

interface ModalProps {
    projectTitle: string;
    data: any;
    urls: any;
    isOpen: boolean;
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ projectTitle, data, urls, isOpen, onClose }) => {

    if(!isOpen) return null;

    const { isDarkMode } = useTheme();

    return (
        createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                />
                <div className="relative flex flex-col justify-center align-middle bg-card rounded-lg shadow-2xl max-w-4xl w-full p-8 ">
                    <h2 className="text-3xl font-bold mb-6">{projectTitle}</h2>
                    
                    {/* Carousel component  */}

                    <div className="mb-6 bg-secondary rounded-lg h-64 flex items-center justify-center">
                        <Carousel data = {data} isModal = {true}/>
                    </div>    

                    {/* Visit site and Github repo button  */}
                    
                    <div className="flex gap-[20px]">
                        <div className="text-center">
                            <a
                                href={urls?.websiteUrl || "#"}
                                target="_blank"
                                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                            >
                                <ExternalLink size={16}/> Visit Site
                            </a>
                        </div>
                        <div className="text-center">
                            <a
                                href={urls?.githubUrl || "#"}
                                target="_blank"
                                className="bg-background rounded-full px-[32px] py-[10px] w-fit flex items-center mx-auto gap-2 hover:scale-107 duration-300 ease-in hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            >
                                <img 
                                    src={isDarkMode ? "/projects/github-white.png" : "/projects/github.png"}
                                    className="w-5 h-5"
                                />
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>, 
        document.body
        )
    )
}