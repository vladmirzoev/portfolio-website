import '../styles/variables.scss';
import '../styles/main.scss';
import '../styles/menu.scss'
import LOGO from '../assets/react.svg'
import { useState } from 'react';
import { useEffect } from 'react';



export const Menu = () => {
    // Logic for header visibility
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Hide header when scrolling down
            setIsVisible(false);
        } else {
            // Show header when scrolling up
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Logic for menu visibility
    const [isToggled, setIsToggled] = useState(false);
    const toggleMenu = () => {
        setIsToggled((prevState => !prevState))
    };

    return (
        <header className={`menu ${isVisible ? 'scroll-up' : 'scroll-down'}`}>
            <div className="container menu__container">
                {/* LOGO */}
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                {/* MENU ITEMS */}
                <nav className={`navigation ${isToggled ? 'is-active' : ''}`}>
                    <ul className="navigation__list">
                        <li className="navigation__list-item">
                            <a href="/" className='navigation__list-item--link'>About</a>
                        </li>
                        <li className="navigation__list-item">
                            <a href="/" className='navigation__list-item--link'>Cases</a>
                        </li>
                        <li className="navigation__list-item">
                            <a href="/" className='navigation__list-item--link'>Contacts</a>
                        </li>
                    </ul>
                </nav>

                <div className="menu__controls" onClick={toggleMenu}>
                    <span className="menu__controls-text">
                        {isToggled ? 'Close' : 'Menu'}
                    </span>
                    <div className={`menu__controls-icon ${isToggled ? 'is-toggled' : ''}`}>
                        <span className='menu__controls-icon--top'></span>
                        <span className='menu__controls-icon--center'></span>
                        <span className='menu__controls-icon--bottom'></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;