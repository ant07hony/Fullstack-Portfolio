import { useState, useEffect } from "react";

function About(props){

    const [about, setAbout] = useState(null)

    const getAboutData = async () => {

        const response = await fetch("./about.json")

        const data = await response.json()

        setAbout(data)
    }

    useEffect(() => { getAboutData() }, [])

    const loaded = () => (
        <div className="about">
            <img src={about.headshot} ></img>
            <h2>{ about.name }</h2>
            <div className="about-links">
            <a href={ about.resume }>Resume</a>
            <a href={about.github}>Github</a>
            <a href={about.linkedin}>LinkedIn</a>
            </div>
            <p>{ about.bio }</p>
        </div>
    )
    return about ? loaded() : <h1>Loading...</h1>
}

export default About