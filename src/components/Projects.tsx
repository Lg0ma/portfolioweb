import "./Styles/Projects.css"
import { Github, Star } from "lucide-react"

// Import your images from the assets folder
import ezradImage from "../assets/EZrad.png"
import traceImage from "../assets/TRACE.png"
import credStalkerImage from "../assets/credstalker.png"
import healthRoutesImage from "../assets/HealthRoutes.png"

export function Projects() {
    const projects = [
    {
      title: "EZrad Medical Imaging Platform",
      description:
        "A HIPAA-compliant medical imaging platform for processing X-ray images for healthcare clinics. Features real-time DICOM protocol integration via TCP/IP for rapid diagnostics, secure Supabase database linking medical images with patient records, and automated QA workflow to reduce report review time while maintaining regulatory compliance.",
      image: ezradImage,
      tech: ["React", "FastAPI", "Supabase", "Tailwind CSS", "DICOM", "TCP/IP"],
      imageClass: "green",
      github: "https://github.com/Lg0ma/EZRAD.git",
      timeline: "September 2024 - Present",
      highlight: "HIPAA-Compliant Healthcare Solution"
    },
    {
      title: "TRACE Security Platform",
      description:
        "An enterprise security testing platform integrating 5+ penetration testing tools for vulnerability assessment. Features AI-powered password generator using PyTorch achieving 85% success rate, web crawler and directory fuzzer identifying 200+ hidden endpoints, and scales to handle 100+ concurrent security scans with 98% code coverage.",
      image: traceImage,
      tech: ["Python", "SvelteKit", "PyTorch", "Kali Linux", "FastAPI"],
      imageClass: "pink",
      github: "https://github.com/TadeoDelaRocha/CS4311_TRACE_Delta_Spring2025.git",
      timeline: "August 2024 - May 2025",
      highlight: "AI-Powered Security Testing"
    },
    {
      title: "CredStalker",
      description:
        "A credential security tool that checks against large-scale breached password databases using k-anonymity for zero-knowledge verification. Integrates multiple breach notification APIs with FastAPI backend, includes password strength analyzer for estimating crack times, and features responsive React UI with data visualizations for security assessments.",
      image: credStalkerImage,
      tech: ["React", "FastAPI", "Python", "k-anonymity", "Data Visualization"],
      imageClass: "blue",
      github: "https://github.com/armenta-i/cred-stalker.git",
      timeline: "January 2025 - May 2025",
      highlight: "Zero-Knowledge Security Verification"
    },
    {
      title: "Health Routes",
      description:
        "A cross-platform mobile app for locating healthcare facilities using Google Maps Places API. Features real-time GPS tracking with low latency for live navigation updates, scraped and cached facility data to reduce API calls while maintaining freshness, and optimized React Native performance for smooth scrolling across iOS and Android.",
      image: healthRoutesImage,
      tech: ["React Native", "FastAPI", "Google Gen-AI","Google Maps API", "GPS", "ExpoGo"],
      imageClass: "orange",
      github: "https://github.com/armenta-i/health-routes.git",
      timeline: "April 2025 - May 2025",
      highlight: "Cross-Platform Healthcare Navigation"
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

                <div className="projectsContainer">
                    {projects.map((project, index) => (
                        <div key={index} className="projectCard">
                            <div className="cardContent">
                                {/* Left side - Image */}
                                <div className={`projectImageWrapper ${project.imageClass}`}>
                                    {project.image && (
                                        <>
                                            <img src={project.image} alt={project.title} />
                                            <div className="imageOverlay"></div>
                                        </>
                                    )}
                                </div>

                                {/* Right side - Content */}
                                <div className="projectDetails">
                                    <div className="projectHeader">
                                        <h3 className="projectTitle">{project.title}</h3>
                                        <div className="projectMeta">
                                            <div className="projectHighlight">
                                                <Star className="highlightIcon" />
                                                <span className="highlightText">{project.highlight}</span>
                                            </div>
                                            <p className="projectTimeline">{project.timeline}</p>
                                        </div>
                                    </div>

                                    <p className="projectDescription">{project.description}</p>

                                    <div className="techStack">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className={`techTag ${project.imageClass}`}>
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
                                            <Github className="githubIcon" />
                                        </a>
                                    </div>
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