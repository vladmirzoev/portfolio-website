import DoubleHeading from "./DoubleHeading";
import SocialLinks from "./socialLinks";
import { contactLinks } from '../utils/links'

const Contacts = () => {
    return (
        <>
            <section>
                <h3 className="subtitle">.../Contacts ...</h3>
                <DoubleHeading
                    firstText="Vlad"
                    secondText="Mirzoev"
                />
                <SocialLinks
                    links={ contactLinks }
                />
            </section>
        </>
    )
}

export default Contacts;