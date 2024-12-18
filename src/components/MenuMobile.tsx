import '../styles/variables.scss';
import '../styles/menuMobile.scss';
import { useState } from 'react';

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
;
    // shows or hides the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className={`menu-mobile ${isOpen ? "menu-mobile__active" : ""}`}>
                <div className="menu-mobile__logo">
                    <h3>Vlad Mirzoev</h3>
                </div>
                <div className="menu-mobile__button" onClick={toggleMenu}>
                    {/* burger menu */}
                    {isOpen ? "✖" : "☰"} {/* Show "X" if open, "☰" if closed */}
                </div>
                    
                {/* Conditional rendering for menu items */}
                {isOpen && (
                    <nav className="navigation" style={{ padding: '1rem' }}>
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    )
}

export default MenuMobile;