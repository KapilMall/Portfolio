import { useTheme } from "@/lib/ThemeContext";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface projectOverviewProps {
    project: any;
    handleProjectClick: (project: any) => void;
    index: number;
}

export const ProjectOverView:React.FC<projectOverviewProps> = ({project, handleProjectClick, index}) => {

    const { isDarkMode } = useTheme();
    
    //states and refs for animation purpose
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    //use effect IntersectionObserver for animation.

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) =>{
                    if(entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "50px"
            }
        );

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        };

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [])


    return (
        <div ref={sectionRef} 
             className={`w-full h-full flex flex-col group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-all duration-1000 ease-out ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-28"
                }`} 
                style={{
                    transitionDelay: `${index * 350}ms`
                }}
                onClick={() => handleProjectClick(project)}>
            <div className="h-48 shrink-0 overflow-hidden">
                <img 
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
            </div>

            {/* tech stack and other info  */}

            <div className="p-6 flex flex-col items-center justify-center relative flex-1">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    { 
                    project.tags.map((tag: any, key: number) => (
                        <span key={key} className="px-2 py-1 text-sm font-medium rounded-full border bg-secondary text-secondary-foreground">
                            {tag}
                        </span>
                        ) ) }
                </div>

                        {/* title  */}
                        <h3 className="text-xl font-semibold mb-1">{ project.title }</h3>

                        {/* description  */}
                        <p className="text-muted-foreground text-sm mb-4 font-light">
                            { project.description }
                        </p>

                        {/* github and project link  */}

                        <div className="absolute bottom-[10px] w-full">
                            <div className="flex flex-row px-2 py-1 gap-2 items-center">
                                <a 
                                    href={project.url?.websiteUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-1000">
                                    <ExternalLink />
                                </a>
                                <a 
                                    href={project.url?.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-1000">
                                    <img 
                                        src={isDarkMode ? "/projects/github-white.png" : "/projects/github.png"}
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                        </div>
            </div>
        </div>
    )
}