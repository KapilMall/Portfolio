import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Carousel } from "./Carousel";

export const ProjectsSection = () => {
    const [openProjectPreviewModal, setOpenProjectPreviewModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
          id: 1,
          title: "AppOpnr",
          description: "App opener to open links directly in apps instead of Browser",
          mainImage: "/projects/Dark.png",
          details: [
            { 
                id: 11,
                title: 'App in dark mode',
                description: "App Overview in dark mode!",
                image: '/projects/Dark.png',
            },
            { 
                id: 12,
                title: 'App in light mode',
                description: "App Overview in light mode!",
                image: '/projects/light.png',
            },
            { 
                id: 13,
                title: 'Enter URL',
                description: "User can paste the URL you want to create the AppOpnr URL for.",
                image: '/projects/enter-url.png',
            },
            { 
                id: 14,
                title: 'Generated URL',
                description: "User can copy the generated URL from here to open the app directly from the link.",
                image: '/projects/generated-url.png',
            },
          ],
          url: {
            githubUrl: "https://github.com/KapilMall/App-opnr-frontend",
            websiteUrl: "https://app-opnr.vercel.app/"
          },
          tags: ["React", "TailwindCSS", "Node Js", "Express"],
        },
        {
          id: 2,
          title: "Orbit Analytics Dashboard",
          description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
          mainImage: "/projects/project2.png",
          tags: ["TypeScript", "D3.js", "Next.js"],
          demoUrl: "#",
          githubUrl: "#",
        },
        {
          id: 3,
          title: "E-commerce Platform",
          description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
          mainImage: "/projects/project3.png",
          tags: ["React", "Node.js", "Stripe"],
          demoUrl: "#",
          githubUrl: "#",
        },
          {
          id: 4,
          title: "Orbit Analytics",
          description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
          mainImage: "/projects/project2.png",
          tags: ["TypeScript", "D3.js", "Next.js"],
          demoUrl: "#",
          githubUrl: "#",
        },
         {
          id: 5,
          title: "E-commerce Dashboard",
          description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
          mainImage: "/projects/project3.png",
          tags: ["React", "Node.js", "Stripe"],
          demoUrl: "#",
          githubUrl: "#",
        },
      ];
    
    const handleProjectClick = (project: any) => {
        setSelectedProject(project)
        setOpenProjectPreviewModal(true);
    }

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

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                    <Carousel data={projects} isModal={false} handleProjectClick={handleProjectClick}/>
             
                {/* </div> */}

                {/* Modal  */}
                <Modal projectTitle={selectedProject?.title} data={selectedProject?.details} urls={selectedProject?.url} isOpen={openProjectPreviewModal} onClose = {() => setOpenProjectPreviewModal(false)}/> 
                                         
                
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