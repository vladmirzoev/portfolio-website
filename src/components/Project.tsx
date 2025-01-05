import Card from "./Card";
import ButtonArrow from './ButtonArrow';
import "../styles/project.scss";

type ProjectProps = {
    heading: string;
    descriptionText: string;
    bgImage: string;
  };

const Project = ({
    heading = 'Project',
    descriptionText = 'Project about bla bla',
    bgImage,
    } : ProjectProps) => {
    return (
        <>
            <a href="#" className="project">
                <Card
                    bgColor = 'white'// Default to 'white'
                    photo = {bgImage}
                />
                <div className="project-text">
                    <figcaption>
                        <strong>{heading}</strong>
                        <span className="dash">—</span>
                        {descriptionText}
                    </figcaption>
                    <ButtonArrow />
                </div>
                
            </a>
            
        </>
    )
}

export default Project;