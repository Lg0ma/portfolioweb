import "./Styles/Projects.css"
import { Github, Star } from "lucide-react"

// Import your images from the assets folder
import traceImage from "../assets/TRACE.png"
import credStalkerImage from "../assets/credstalker.png"
import healthRoutesImage from "../assets/HealthRoutes.png"

export function Projects() {
    const projects = [
    {
      title: "TRACE Security Platform",
      description:
        "A comprehensive security testing platform integrating various penetration testing tools for network vulnerability assessment. Features AI-powered password generation, web crawling, and directory fuzzing capabilities.",
      image: traceImage,
      tech: ["Kali Linux", "Python", "SvelteKit", "FastAPI", "Docker", "VMWare"],
      imageClass: "pink",
      github: "https://github.com/TadeoDelaRocha/CS4311_TRACE_Delta_Spring2025.git",
      timeline: "August 2024 - May 2025",
      highlight: "Full-Stack Security Architecture"
    },
    {
      title: "CredStalker",
      description:
        "A web-based credential security assessment tool that checks passwords and emails against known data breaches. Implements k-anonymity model for secure verification and provides vulnerability analysis with actionable security recommendations.",
      image: credStalkerImage,
      tech: ["React", "Python", "FastAPI", "HIBP API", "JavaScript"],
      imageClass: "blue",
      github: "https://github.com/armenta-i/cred-stalker.git",
      timeline: "January 2023 - May 2023",
      highlight: "Frontend Development & API Integration"
    },
    {
      title: "Health Routes",
      description:
        "A cross-platform mobile application helping users locate nearby hospitals and healthcare centers. Features real-time GPS tracking, live route updates, and comprehensive facility details through web scraping and API integration.",
      image: healthRoutesImage,
      tech: ["React Native", "FastAPI", "Google Maps API", "ExpoGo", "Docker"],
      imageClass: "orange",
      github: "https://github.com/Josix7/AI-HACK.git",
      timeline: "April 2025 - Ongoing",
      highlight: "Mobile Development & Real-time Features"
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
                    <img src={project.image} alt={project.title} />
                    <div className="imageOverlay"></div>
                    </div>

                    <div className="projectHeader">
                    <div className="projectTitleRow">
                        <h3 className="projectTitle">{project.title}</h3>
                    </div>
                        <div className="projectHighlight">
                        <Star className="highlightIcon" />
                        <span className="highlightText">{project.highlight}</span>
                        </div><br/>
                    <p className="projectTimeline">{project.timeline}</p>
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
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="primaryAction"
                        >
                          View on GitHub
                          <Github className="h-8 w-8" />
                        </a>
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