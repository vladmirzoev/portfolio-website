import '../styles/main.scss';
import DoubleHeading from "./DoubleHeading";
import SocialLinks from "./socialLinks";
import { contactLinks } from '../utils/links'
import DownloadButton from './DownloadButton';


const Contacts = () => {
    return (
        <>
            <section id='contacts'>
                <h3 className="subtitle">.../Contacts ...</h3>
                <div className="contacts-wrapper" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', gap: '4rem'}}>
                    <DoubleHeading
                        firstText="Vlad"
                        secondText="Mirzoev"
                        isInfo
                    />
                    <DownloadButton />
                    <SocialLinks
                        links={ contactLinks }
                    />
                   
                </div>
                
                
                
            </section>
        </>
    )
}

export default Contacts;