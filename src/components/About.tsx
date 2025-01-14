import Card from "./Card";
import Photo from '../assets/img/about.jpg';
import '../styles/main.scss';
import '../styles/about.scss'

const About = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../About me ...</h3>
                <div className="about-wrapper">
                    <p className="description">Hello! I'm Vlad, a front-end developer based in Netherlands. My passion is to make great designs the reality. 
                        <br/>Oh, I am also a student at University of Twente in Enschede. I study Business Information Technology. <br /> Well, I hope you're already impressed! Let's work together!
                    </p>
                    <Card 
                        photo={Photo}
                    />
                </div>
                
                
                <div className="cards-wrapper" style={{ display: 'flex', gap: '4rem', flexDirection: 'row', flexWrap: 'wrap' }}>
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
                </div>
                
                

                
            </section>
            
        </>
    )
}

export default About;