
import '../styles/main.scss';
import '../styles/about.scss'
import Button from "./Button";

const About = () => {
    return (
        <>
            <section id="about">
                <h3 className="subtitle">.../About me ...</h3>
                <div className="about-wrapper">
                    <p className="description">Hello, World! I'm Vlad, a russian born, dutch based front-end developer. My passion is to make great designs the reality.My passion is to make great designs the reality.My passion is to make great designs the reality.My passion is to make great designs the reality.My passion is to make great designs the reality. 
                        <br/>Oh, I am also a student at University of Twente in Enschede. I study Business Information Technology. <br /> Well, I hope you're already impressed! Let's work together!
                    </p>
                    {/* <Card 
                        photo={Photo}
                    /> */}
                    <div className="skills">
                        <Button
                            isLink = {false}
                            text="JavaScript"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="React"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="CSS"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="HTML"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="Java"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="UI"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="WEB"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="BI"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="VUE.js"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="TypeScript"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="English"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="Dutch"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="Russian"
                            style="primary"
                        />
                        
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default About;