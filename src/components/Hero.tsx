import "./Styles/Hero.css";
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
    const handleDownload = () => {
        // Optional: Add analytics tracking here
        console.log("Resume downloaded");
    };

    return (
        <section>
            <div className="heroMain">
                <h1>Luis Gomez</h1>
                <h2>Computer Science Student</h2>
                <p>Welcome to my portfolio. I am an aspiring software engineer and a student at UT El Paso, committed to continuous learning and eager to apply my developing skills to build innovative solutions and advance my professional journey.</p>            </div>

            <div className="Content">
                <div className="buttonContainer">
                    <a 
                        href="/Resume.pdf" 
                        download="Luis_Gomez_Resume.pdf"
                        className="downloadButton"
                        onClick={handleDownload}
                    >
                        <Download className="downloadIcon" />
                        Download My Resume
                    </a>
                </div>
                <div className="Socials"> 
                    <a href="https://github.com/Lg0ma"><Github className="h-8 w-8" /></a>
                    <a href="https://www.linkedin.com/in/luisgomez31209/"><Linkedin className="h-8 w-8" /></a>
                    <a><Mail className="h-8 w-8" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero;