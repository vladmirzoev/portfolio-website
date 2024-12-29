import Card from "./Card";
import Project from "./Project";

const Projects = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../Projects ...</h3>
                <Project
                    heading="Server-client UNO Game"
                    descriptionText="Fancy a duel? Come and play UNO at my github!"
                    bgImage="klrjfirj"
                />
            </section>
        </>
    )
}

export default Projects;