import Card from "./Card";
import Photo from '../assets/img/about.jpg';

const About = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../About me ...</h3>
                <p className="description">Hello! I'm Vlad, a front-end developer. Currently searching for work</p>
                <Card 
                    photo={Photo}
                />

                <Card
                    bgColor = 'white'
                    descriptionText = 'TypeScript / React / Vue / HTML5 /'
                    heading = 'Front-end'
                />
                <Card
                    bgColor = 'dark'
                    descriptionText = 'CSS / SCSS / SASS'
                    heading = 'Styles'
                />  
            </section>
            
        </>
    )
}

export default About;