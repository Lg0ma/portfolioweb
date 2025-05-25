import "./Styles/Hero.css";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
    return (
        <section>

            <div className="heroMain">
                <h1>Luis Gomez</h1>
                <h2>Full Stack Developer</h2>
                <p>Welcome to my portfolio! I am a Full Stack Developer with a passion for creating dynamic and responsive web applications.</p>
            </div>

            <div className="Content">
                <div className="buttonContainer">
                    <button>View my work</button>
                    <button>Download My Resume</button>
                </div>
                <div className="Socials"> 
                    <a href="https://github.com/Lg0ma"><Github className="h-8 w-8" /></a>
                    <a href="https://www.linkedin.com/in/luisgomez31209/"><Linkedin className="h-8 w-8" /></a>
                    <a ><Mail className="h-8 w-8" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero;