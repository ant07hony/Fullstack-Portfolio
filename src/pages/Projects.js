import { useState, useEffect } from "react";

function Projects(props) {

    const [projects, setProjects] = useState(null)

    // const getProjectsData = async () => {

    //     const response = await fetch("./projects.json")

    //     const data = await response.json()
    //     console.log(data)

    //     setProjects(data)
    // }

    async function getProjectsData() {
        try {
            const response = await fetch("./projects.json")

            const data = await response.json()

            setProjects(data)

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => { getProjectsData() }, [])

    const loaded = () => {
        return projects?.map((project, idx) => (


            <div key={idx} className="project-card">
                <div className="project-card-content">
                    <div className="project-info">
                        <h1>{project.name}</h1>
                        {/* <p>{project.description}</p> */}
                    </div>
                    {/* <div>
                        <img src={project.image} alt="{project.name}"></img>
                    </div> */}
                    <div className="project-card-content-hover">
                        <img src={project.image} alt="{project.name}"></img>
                        <div>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-card-links">
                            <a href={project.git}>Github</a>
                            <a href={project.live}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>


        ))
    }
    return (
        <div className="project-container">
        <h1>My Projects</h1>
            {projects ? loaded() : <h1>Loading...</h1>}
        </div>
    )
}

export default Projects