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
                            heading="Todo App"
                            descriptionText="A user-friendly drag-n-drop task management application that allows users to efficiently organize their tasks. Key features include filtering, deadline management, search functionality, theme switching between dark and light modes, category management, and the ability to edit or delete tasks. This application streamlines task tracking and enhances productivity with its intuitive interface and robust functionality."
                            bgImage={todoImageSrc}
                        />
                    </div>

                    <div className="projects-wrapper__project" onMouseEnter={handleUnoHover} onMouseLeave={handleUnoUnhover}>
                        <Project
                            heading="Server-client UNO Game"
                            descriptionText="Extension to a university project, transforming a text-based UNO game into a fully-fledged graphical application. Originally written in Java with a text UI, I recreated the game logic in JavaScript and developed an interactive GUI using React components. This project showcases my ability to adapt and enhance existing code, bridging different programming languages and frameworks to create a more engaging user experience."
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