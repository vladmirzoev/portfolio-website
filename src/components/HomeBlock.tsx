import '../styles/homeBlock.scss';
import Button from './Button';

const HomeBLock = () => {
    return (
        <>
            <div className="home">
                <div className="home-title">
                    <h1 className='home-title__heading'>Front-end</h1>
                    <h1 className='home-title__heading'>Developer</h1>
                </div>
                <div className="home-description">
                    <p>My goal is to write maintainable, clean and understandable code to process development was enjoyable</p>
                    <div className="home-description__buttons">
                        <Button
                            text="Projects"
                            style="primary"
                            link="#"
                            />
                        <Button
                            style="primary"
                            link="#"
                            icon='->'
                        />
                    </div>
                </div>

                <div className="home-links">
                    <Button
                        text='GitHub'
                        style='secondary'
                        link='#'
                        icon=''
                    />
                    <Button
                        text='LinkedIn'
                        style='secondary'
                        link='#'
                        icon=''
                    />
                    <Button
                        text='Telegram'
                        style='secondary'
                        link='#'
                        icon=''
                    />
                    <Button
                        text='Instagram'
                        style='secondary'
                        link='#'
                        icon=''
                    />
                </div>
                
            </div>
        </>
    )
}

export default HomeBLock;