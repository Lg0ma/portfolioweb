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
                   I am a CS software engineer student at the University of Texas at El Paso (UTEP), pursuing my bachelor's degree in computer science. I am passionate about developing innovative and impactful solutions that can improve the lives of people and communities. I have experience in various programming languages such as Java, Python, JavaScript, C, PHP, and Assembly. I am also interested in learning new technologies and expanding my skills. I aim to become a successful software engineer who can create change through technology.
                   </p>
                </div>
            </div>
        </section>
    )
}

export default About