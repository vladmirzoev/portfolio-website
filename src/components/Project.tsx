import Card from "./Card";

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
            <Card
                bgColor = 'white'// Default to 'white'
                heading = {heading}
                descriptionText = {descriptionText}
                bgImage = {bgImage}
            />
        </>
    )
}

export default Project;