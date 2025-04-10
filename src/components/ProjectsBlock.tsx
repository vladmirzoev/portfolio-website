import Project from "./Project";
import UNO from "../assets/img/projects/uno.png";
import UNO_HOVER from "../assets/img/projects/uno-hover.png";
import TODO from "../assets/img/projects/todo-main.png";
import TODO_HOVER from "../assets/img/projects/todo-hover.png";
import MURLAB from "../assets/img/projects/MURLAB.png";
import MURLAB_HOVER from "../assets/img/projects/MURLAB_HOVER.png";
import '../styles/main.scss';
import "../styles/projectsBlock.scss";
import { useState } from "react";

const Projects = () => {
    const [todoImageSrc, setTodoImageSrc] = useState(TODO);
    const [unoImageSrc, setUnoImageSrc] = useState(UNO);
    const [murlabImageSrc, setMurlabImageSrc] = useState(MURLAB);

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

    const handleMurlabHover = () => {
        setMurlabImageSrc(MURLAB_HOVER);
    }

    const handleMurlabUnhover = () => {
        setMurlabImageSrc(MURLAB);
    }

    return (
        <>
            <section id="cases">
                <h3 className="subtitle">.../Projects ...</h3>
                <div className="projects-wrapper">
                    <div className="projects-wrapper__project" onMouseEnter={handleMurlabHover} onMouseLeave={handleMurlabUnhover}>
                        <Project
                            heading="MURLAB | Webshop with digital products"
                            descriptionText="Webshop with digital products, built with React, Firebase and NextJS"
                            bgImage={murlabImageSrc}
                            link="https://webshop-rust-six.vercel.app/"
                        />
                    </div>
                    
                    <div className="projects-wrapper__project" onMouseEnter={handleTodoHover} onMouseLeave={handleTodoUnhover}>
                        <Project
                            heading="Todo App"
                            descriptionText="Drag-n-drop task management app"
                            bgImage={todoImageSrc}
                            link="https://todo-app-react-lyart-alpha.vercel.app/"
                        />
                    </div>

                    <div className="projects-wrapper__project" onMouseEnter={handleUnoHover} onMouseLeave={handleUnoUnhover}>
                        <Project
                            heading="Browser-based UNO Game"
                            descriptionText="Implementation of a well-known game"
                            bgImage={unoImageSrc}
                            link="https://uno-game-react.vercel.app/"
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