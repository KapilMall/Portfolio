import { ExternalLink } from "lucide-react";

interface projectOverviewProps {
    project: any;
    handleProjectClick: (project: any) => void
}

export const ProjectOverView:React.FC<projectOverviewProps> = ({project, handleProjectClick}) => {
    return (
        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer" onClick={() => handleProjectClick(project)}>
            <div className="h-48 overflow-hidden">
                <img 
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* tech stack and other info  */}

            <div className="p-6 flex flex-col items-center justify-center relative">
                <div className="flex flex-wrap gap-2 mb-4">
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

                        <div className="absolute bottom-0 w-full">
                            <div className="flex flex-row px-2 py-1 gap-2 items-center">
                                <a 
                                    href={project.url?.websiteUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink />
                                </a>
                                <a 
                                    href={project.url?.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <img 
                                        src="/projects/github-white.png"
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                        </div>
            </div>
        </div>
    )
}