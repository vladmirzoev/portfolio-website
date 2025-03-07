import Card from "./Card";
// import ButtonArrow from './ButtonArrow';
import '../styles/main.scss';
import "../styles/project.scss";
import { useState } from "react";
import CustomCursor from "./CustomCursor";

type ProjectProps = {
    heading: string;
    descriptionText: string;
    bgImage: string;
    link: string;
  };

const Project = ({
    heading = 'Project',
    descriptionText = 'Project about bla bla',
    bgImage,
    link,
    } : ProjectProps) => {
    
    const [cursorActive, setCursorActive] = useState(false);    
    return (
        <>
            <CustomCursor active={cursorActive} text="Explore" />
            <div className="project project-item"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
            >
                <a href={`${link}`}>
                    <Card
                        bgColor = 'black'// Default to 'white'
                        photo = {bgImage}
                    />
                </a>
                <div className="project-text">
                    <h3>{heading}</h3>
                    <p>{descriptionText}</p>
                    {/* <figcaption>
                        <strong>{heading}</strong>
                        <span className="dash">—</span>
                        {descriptionText}
                    </figcaption> */}
                    {/* <ButtonArrow /> */}
                </div>
            </div>
            

                
                
           
            
        </>
    )
}

export default Project;