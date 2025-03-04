import '../styles/variables.scss';
import '../styles/main.scss';
import '../styles/homeBlock.scss';
import Button from './Button';
import DoubleHeading from './DoubleHeading';
import SocialLinks from './socialLinks';
import { contactLinks } from '../utils/links'
import ButtonArrow from './ButtonArrow';
import { useState } from 'react';
import MAIN_PHOTO from '../assets/img/photoCover.png';
import HOVER_PHOTO from '../assets/img/photoCover-hover.png';

const HomeBLock = () => {
    const [imageSrc, setImageSrc] = useState(MAIN_PHOTO);

    const handleHover = () => {
        setImageSrc(HOVER_PHOTO);
    }

    const handleUnhover = () => {
        setImageSrc(MAIN_PHOTO);
    }
    
    return (
        <>
            <section className="home">
                <div className="home-wrapper">
                    <DoubleHeading
                        firstText='Front-end'
                        secondText='Developer'
                    />

                    {/* CARD WITH PHOTO */}
                    <div className="main-photo"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleUnhover}
                    >
                        <img
                            src={imageSrc} 
                            alt="My Photo:)"
                        />
                    </div>
                </div>
                
                <div className="home-description">
                    <p>Hey, I’m Vlad— a front-end developer who loves building interfaces that just make sense.</p>
                    <div className="home-description__buttons">
                        <Button
                            text="Projects"
                            style="primary"
                            link='#cases'
                        />
                        <ButtonArrow />
                       
                    </div>
                </div>

                {/* LINKS */}
                <SocialLinks
                    links={contactLinks}                    
                />
                
            </section>
        </>
    )
}

export default HomeBLock;