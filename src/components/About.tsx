import Card from "./Card";

const About = () => {
    return (
        <>
            <h3 className="subtitle">.../About me ...</h3>
            <p className="description">Hello! I'm Vlad, a front-end developer. Currently searching for work</p>
            <Card
                bgColor = 'white'
                descriptionText = 'TypeScript / React / Vue / HTML5'
                heading = 'Front-end'
            />
        </>
    )
}

export default About;