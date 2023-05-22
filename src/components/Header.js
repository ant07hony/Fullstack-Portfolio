import { Link } from "react-router-dom";

function Header(props) {

   
    return (
        <header className="header">
            <h1>My Dev Portfolio</h1>
            
                <div className="dropdown">
                    <button className="dropbtn">Welcome! Hover Here</button>
                    <div className="dropdown-content">
                        <Link to="/" >
                            <div>ABOUT </div>
                        </Link>
                        <Link to="/skills">
                            <div>SKILLS</div>
                        </Link>
                        <Link to="/projects">
                            <div>PROJECTS</div>
                        </Link>
                    </div>
                </div>
            
        </header>
    );
}

export default Header;