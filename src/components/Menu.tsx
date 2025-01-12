import '../styles/menu.scss'
import LOGO from '../assets/react.svg'
import { useState } from 'react';



export const Menu = () => {
    const [isToggled, setIsToggled] = useState(false);
    const toggleMenu = () => {
        setIsToggled((prevState => !prevState))
    };

    return (
        <header className='menu'>
            <div className="container menu__container">
                {/* LOGO */}
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                {/* MENU ITEMS */}
                <nav className={`navigation ${isToggled ? 'isActive' : ''}`}>
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
                    <div className="menu__controls-icon">
                        *icon*
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;