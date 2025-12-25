import { ArrowRight, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {

    const projects = [
        {
          id: 1,
          title: "SaaS Landing Page",
          description: "A beautiful landing page app using React and Tailwind.",
          image: "/projects/project1.png",
          tags: ["React", "TailwindCSS", "Supabase"],
          demoUrl: "#",
          githubUrl: "#",
        },
        {
          id: 2,
          title: "Orbit Analytics Dashboard",
          description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
          image: "/projects/project2.png",
          tags: ["TypeScript", "D3.js", "Next.js"],
          demoUrl: "#",
          githubUrl: "#",
        },
        {
          id: 3,
          title: "E-commerce Platform",
          description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
          image: "/projects/project3.png",
          tags: ["React", "Node.js", "Stripe"],
          demoUrl: "#",
          githubUrl: "#",
        },
      ];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-primary-foreground mb-12 mx-auto max-w-2xl">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                {/* Images  */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* tech stack and other info  */}

                                <div className="p-6 flex flex-col items-center justify-center relative">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        { project.tags.map((tag, key) => (
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
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink />
                                            </a>
                                            <a 
                                                href={project.githubUrl}
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
                        ))
                    }
                </div>

                {/* Go to github profile button  */}

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/KapilMall"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight />
                    </a>
                </div>

            </div>
        </section>
    )
}