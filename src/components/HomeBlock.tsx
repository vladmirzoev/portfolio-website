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

const HomeBLock = () => {
    return (
        <>
            <section className="home">
                {/* <div className="home-title">
                    <h1 className='home-title__heading'>Front-end</h1>
                    <h1 className='home-title__heading'>Developer</h1>
                </div> */}
                <DoubleHeading
                    firstText='Front-end'
                    secondText='Developer'
                />
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