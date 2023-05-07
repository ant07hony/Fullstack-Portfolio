import { useState, useEffect } from "react";

function Projects(props) {

    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {

        const response = await fetch("./projects.json")

        const data = await response.json()
        console.log(data)

        setProjects(data)
    }

    useEffect(() => getProjectsData(), [])

    const loaded = () => {
        return projects.map((project) => (

            <div className="project-card">
                <h1>{project.name}</h1>
                <img src={project.image}></img>
                <a href={project.git}>Github</a>
                <a href={project.live}><button>Live Site</button></a>
            </div>
            
        ))
}
return (
    <div className="project-container">
        {projects ? loaded() : <h1>Loading...</h1>}
    </div>
)
}

export default Projects