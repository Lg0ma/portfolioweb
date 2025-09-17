import "./Styles/Skills.css"
import { Code, Palette, Server, Wrench, BarChart3, Database } from "lucide-react"

export function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="categoryIconSvg" />,
            skills: [
                { name: "JavaScript", level: "expert" },
                { name: "TypeScript", level: "expert" },
                { name: "Python", level: "expert" },
                { name: "Java", level: "advanced" },
                { name: "C", level: "advanced" },
                { name: "PHP", level: "intermediate" },
                { name: "Bash", level: "intermediate" },
                { name: "Assembly", level: "intermediate" },
                { name: "Scala", level: "intermediate" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <Palette className="categoryIconSvg" />,
            skills: [
                { name: "React", level: "expert" },
                { name: "HTML/CSS", level: "expert" },
                { name: "React Native", level: "advanced" },
                { name: "Vue", level: "advanced" },
                { name: "Next.js", level: "advanced" },
                { name: "Tailwind CSS", level: "intermediate" }
            ]
        },
        {
            title: "Backend Development",
            icon: <Server className="categoryIconSvg" />,
            skills: [
                { name: "Spring Boot", level: "expert" },
                { name: "Node.js", level: "expert" },
                { name: "FastAPI", level: "expert" },
                { name: "Flask", level: "advanced" },
                { name: "Express", level: "advanced" },
                { name: "PyTorch", level: "advanced" },
                { name: "TensorFlow", level: "intermediate" },
                { name: "HTTPS/TLS", level: "intermediate" }
            ]
        },
        {
            title: "DevOps & Tools",
            icon: <Wrench className="categoryIconSvg" />,
            skills: [
                { name: "Git/GitHub", level: "expert" },
                { name: "Docker", level: "expert" },
                { name: "Linux", level: "advanced" },
                { name: "VMWare", level: "advanced" },
                { name: "OAuth", level: "intermediate" },
                { name: "Kaggle", level: "intermediate" }
            ]
        },
        {
            title: "Data Science & ML",
            icon: <BarChart3 className="categoryIconSvg" />,
            skills: [
                { name: "Pandas", level: "expert" },
                { name: "scikit-learn", level: "expert" },
                { name: "PyTorch", level: "advanced" },
                { name: "TensorFlow", level: "advanced" },
                { name: "Jupyter Notebooks", level: "advanced" },
                { name: "MLflow", level: "intermediate" }
            ]
        },
        {
            title: "Databases",
            icon: <Database className="categoryIconSvg" />,
            skills: [
                { name: "MySQL", level: "expert" },
                { name: "Supabase", level: "expert" },
                { name: "PostgreSQL", level: "advanced" },
                { name: "MongoDB", level: "intermediate" },
                { name: "SQLite", level: "intermediate" },
                { name: "Firebase", level: "intermediate" }
            ]
        }
    ]

    return (
        <section id="skills" className="skillsSection">
            <div className="backgroundOverlay"></div>

            <div className="container">
                <div className="header">
                    <h2 className="title">Technical Skills</h2>
                    <p className="subtitle">
                        A comprehensive overview of my technical expertise across various domains of software development and data science.
                    </p>
                </div>

                <div className="skillsGrid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skillCategory">
                            <h3 className="categoryTitle">
                                <div className="categoryIcon">{category.icon}</div>
                                {category.title}
                            </h3>
                            <div className="skillTags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`skillTag ${skill.level}`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills