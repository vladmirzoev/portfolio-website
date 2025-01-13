import Card from "./Card";
import Photo from '../assets/img/about.jpg';
import '../styles/main.scss';

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
                <Card
                    bgColor = 'white'
                    descriptionText = 'English / Dutch / Russian'
                    heading = 'Languages'
                />
            </section>
            
        </>
    )
}

export default About;