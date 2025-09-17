import "./Styles/about.css"

export function About() {
    return (
        <section id="about" className="aboutSection">
            <div className="backgroundOverlay"></div>
            
            <div className="container">
                <div className="header">
                    <h2 className="title">About Me</h2>
                </div>
                
                <div className="aboutContent">
                    <p>
                        I'm a Computer Science student at the University of Texas at El Paso, graduating in December 2025 with a concentration in Software Engineering and a 3.59 GPA. I earned my associate's degree from El Paso Community College while still in high school—graduating a month before my high school graduation.
                    </p>
                    <p>
                        My technical experience spans Python, Java, JavaScript, React, FastAPI, and PyTorch. I've built EZrad, a HIPAA-compliant medical imaging platform with real-time DICOM protocol integration for healthcare clinics, and TRACE, an enterprise security platform that integrates 5+ penetration testing tools with AI-powered password generation achieving 85% success rates. I'm certified as an Amazon Junior Software Developer and currently pursuing my IBM AI Developer Professional Certificate.
                    </p>
                    <p>
                        I'm passionate about creating technology that solves real problems, from secure medical systems to AI-powered security tools. My goal is to contribute to cutting-edge fields like biomedical computing and artificial intelligence where technology can make a meaningful impact.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About