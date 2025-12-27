import { ExternalLink, Github } from "lucide-react";
import { Button } from "./Button";
import { createPortal } from "react-dom";

interface ModalProps {
    projectTitle: string;
    data: any;
    siteUrl: string,
    githubUrl: string,
    isOpen: boolean,
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ projectTitle, data, siteUrl, githubUrl, isOpen, onClose }) => {

    console.log('isOpen: ', isOpen);
    console.log('projectTitle: ', projectTitle);

    if(!isOpen) return null;

    return (
        createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                />
                <div className="relative bg-card rounded-lg shadow-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-3xl font-bold mb-6">{projectTitle}</h2>
                    
                    {/* Carousel component  */}

                    <div className="mb-6 bg-secondary rounded-lg h-64 flex items-center justify-center">
                        <p className="text-muted-foreground">Carousel will go here</p>
                    </div>    

                    {/* Visit site and Github repo button  */}
                    
                    <div className="flex gap-[20px]">
                        <Button name="Visit Site
                        
                        " backgroundColor="cyan" color="white" borderRadius={10} icon={ExternalLink }/>
                        <Button name="Github" backgroundColor="black" color="white" borderRadius={10} icon={Github}/>
                    </div>
                </div>
            </div>, 
        document.body
        )
    )
}