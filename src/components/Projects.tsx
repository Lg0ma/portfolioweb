import "./Styles/Projects.css"
import { Github } from "lucide-react"

export function Projects() {
    const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      imageClass: "pink",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=400",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      imageClass: "blue",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=200&width=400",
      tech: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
      imageClass: "orange",
    },
  ]
    return (
        <section id="projects" className="projectsSection">
            <div className="backgroundOverlay"></div>

            <div className="container">
            <div className="header">
                <h2 className="title">Featured Projects</h2>
                <p className="subtitle">
                Here are some of my recent projects that showcase my skills and passion for development.
                </p>
            </div>

            <div className="projectsGrid">
                {projects.map((project, index) => (
                <div key={index} className="projectCard">
                    <div className={`projectImage ${project.imageClass}`}>
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    <div className="imageOverlay"></div>
                    </div>

                    <div className="projectHeader">
                    <h3 className="projectTitle">{project.title}</h3>
                    </div>

                    <div className="projectContent">
                    <p className="projectDescription">{project.description}</p>

                    <div className="techStack">
                        {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="techTag">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="projectActions">
                        <button className="primaryAction">
                        <Github className="h-8 w-8" />
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Projects