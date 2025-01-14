import '../styles/variables.scss';
import '../styles/main.scss';
import '../styles/homeBlock.scss';
import Telegram from '../assets/icons/telegram.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import GitHub from '../assets/icons/gitHub.svg';
import Instagram from '../assets/icons/instagram.svg';
import ArrowRight from '../assets/icons/Arrow.svg';
import Button from './Button';
import DoubleHeading from './DoubleHeading';
import SocialLinks from './socialLinks';
import { contactLinks } from '../utils/links'
import ButtonArrow from './ButtonArrow'
import Card from './Card';
import { useState } from 'react';
import MAIN_PHOTO from '../assets/img/photoCover.png'
import HOVER_PHOTO from '../assets/img/photoCover-hover.png'

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
                    <p>My goal is to write maintainable, clean and understandable code to process development was enjoyable</p>
                    <div className="home-description__buttons">
                        <Button
                            text="Projects"
                            style="primary"
                            link='#'
                        />
                        <ButtonArrow />
                       
                    </div>
                </div>

                {/* LINKS */}
                <SocialLinks
                    links={contactLinks}                    
                />

                {/* <div className="home-links">
                    <Button
                        text='GitHub'
                        style='secondary'
                        link='#'
                        icon={GitHub}
                    />
                    <Button
                        text='LinkedIn'
                        style='secondary'
                        link='#'
                        icon={LinkedIn}
                    />
                    <Button
                        text='Telegram'
                        style='secondary'
                        link='#'
                        icon={Telegram}
                    />
                    <Button
                        text='Instagram'
                        style='secondary'
                        link='#'
                        icon={Instagram}
                    />
                </div> */}
                
            </section>
        </>
    )
}

export default HomeBLock;