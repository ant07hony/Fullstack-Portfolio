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
            <img></img><a href={about.linkedin}>LinkedIn</a>
            </div>
            <p>{ about.bio }</p>
        </div>
    )
    return (
        <div>
        {about ? loaded() : <h1>Loading...</h1>}
        {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a> */}
        </div>
       
    )
}

export default About