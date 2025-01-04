import Card from "./Card";
import Project from "./Project";
import UNO from "../assets/img/projects/uno.png";
import TODO from "../assets/img/projects/todo.png";
import "../styles/projectsBlock.scss";

const Projects = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../Projects ...</h3>
                <div className="projects-wrapper">
                    <Project
                        heading="Server-client UNO Game"
                        descriptionText="Fancy a duel? Come and play UNO at my github!"
                        bgImage={UNO}
                    />
                    <Project
                        heading="Drag 'n drop To-Do App"
                        descriptionText="Fancy a duel? Come and play UNO at my github!"
                        bgImage={TODO}
                    />
                </div>
                
                
            </section>
        </>
    )
}

export default Projects;