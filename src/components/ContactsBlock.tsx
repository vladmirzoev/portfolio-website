import DoubleHeading from "./DoubleHeading";
import SocialLinks from "./socialLinks";
import { contactLinks } from '../utils/links'
import Card from "./Card";

const Contacts = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../Contacts ...</h3>
                <DoubleHeading
                    firstText="Vlad"
                    secondText="Mirzoev"
                />
                <Card
                    bgColor="dark"
                    heading="Open to work"
                    descriptionText="download resume"
                    btnText="download resume"
                />
                <SocialLinks
                    links={ contactLinks }
                />
            </section>
        </>
    )
}

export default Contacts;