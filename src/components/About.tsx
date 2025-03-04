import '../styles/main.scss';
import '../styles/about.scss'
import Button from "./Button";

const About = () => {
    return (
        <>
            <section id="about">
                <h3 className="subtitle">.../About me ...</h3>
                <div className="about-wrapper">
                    <p className="description">
                        I’m currently wrapping up my BSc in Business & IT at the University of Twente, where I’ve spent the last few years turning ideas into functional, user-friendly digital experiences.
                        I work with JavaScript, TypeScript, React, Vue, HTML, and SCSS, and I get a kick out of solving real-world problems with clean, efficient code. Whether it’s refining a UI for better usability or figuring out how to make something both beautiful and fast, I’m all in.
                        <br/>
                        <br/>
                        Right now, I’m looking for opportunities to build, learn, and grow— ideally with a team that values creativity, collaboration, and pushing boundaries. Let’s connect and see what we can create together!
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
                            text="UX"
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
                            text="Git"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="SCRUM"
                            style="primary"
                        />
                        <Button
                            isLink = {false}
                            text="Node.js"
                            style="primary"
                        />
                        
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default About;