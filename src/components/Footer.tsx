import StandardContainer from './StandardContainer';
import '../styles/main.scss';
import '../styles/about.scss'

const Footer = () => {

    return (
        <>
            
            <section id="footer" style={ {padding: '0' }}>
                <div className="footer-wrapper" style={ {borderTop: '0.1rem solid'} }>
                    <StandardContainer>
                        <div className="footer-wrapper__text" style={ { display: 'flex', alignItems: 'center', height: '12rem', justifyContent: 'center'} }>
                            <p style={ {fontSize: '1.2rem', margin: '0', textAlign: 'center'} }>Copyright © 2025 Vladislav Mirzoev. All rights reserved.</p>
                        </div>
                        
                    </StandardContainer>
                </div>
                              
            </section>
            
        </>
    )
}

export default Footer;