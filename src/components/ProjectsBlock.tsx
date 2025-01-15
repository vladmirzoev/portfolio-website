import Project from "./Project";
import UNO from "../assets/img/projects/uno.png";
import UNO_HOVER from "../assets/img/projects/uno-hover.png";
import TODO from "../assets/img/projects/todo-main.png";
import TODO_HOVER from "../assets/img/projects/todo-hover.png";
import '../styles/main.scss';
import "../styles/projectsBlock.scss";
import { useState } from "react";

const Projects = () => {
    const [todoImageSrc, setTodoImageSrc] = useState(TODO);
    const [unoImageSrc, setUnoImageSrc] = useState(UNO);

    const handleTodoHover = () => {
        setTodoImageSrc(TODO_HOVER);
    }

    const handleTodoUnhover = () => {
        setTodoImageSrc(TODO);
    }

    const handleUnoHover = () => {
        setUnoImageSrc(UNO_HOVER);
    }

    const handleUnoUnhover = () => {
        setUnoImageSrc(UNO);
    }

    return (
        <>
            <section id="cases">
                <h3 className="subtitle">.../Projects ...</h3>
                <div className="projects-wrapper">
                    <div className="projects-wrapper__project" onMouseEnter={handleTodoHover} onMouseLeave={handleTodoUnhover}>
                        <Project
                            heading="Server-client UNO Game"
                            descriptionText="Fancy a duel? Come and play UNO at my github!"
                            bgImage={todoImageSrc}
                        />
                    </div>

                    <div className="projects-wrapper__project" onMouseEnter={handleUnoHover} onMouseLeave={handleUnoUnhover}>
                        <Project
                            heading="Server-client UNO Game"
                            descriptionText="Fancy a duel? Come and play UNO at my github!"
                            bgImage={unoImageSrc}
                        />
                    </div>
                    
                    {/* <Project
                        heading="Drag 'n drop To-Do App"
                        descriptionText="Fancy a duel? Come and play UNO at my github!"
                        bgImage={TODO}
                    /> */}
                </div>
                
                
            </section>
        </>
    )
}

export default Projects;