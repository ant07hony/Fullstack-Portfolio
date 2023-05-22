import { useState, useEffect } from "react";

function Skills(props) {

    const [skills, setSkills] = useState(null)

    async function getSkillData() {
        try {
            const response = await fetch("./skills.json")

            const data = await response.json()

            setSkills(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { getSkillData() }, [])

    const loaded = () => {
        return (
        skills?.map((skill, idx) => (
            <div key={idx}>
            <h2>{skill.name}</h2>
            {/* <img>{skill.image}</img> */}
            </div>
        ))
        )

    }

    return (
        <div className="skills">
            <h2>I have experience with these technologies</h2>

            <div className="skills-grid">
            {skills ? loaded() : <h1>Loading...</h1>}

            </div>
        </div>
    )
}

export default Skills