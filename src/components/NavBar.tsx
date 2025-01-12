import '../styles/navBar.scss'
export const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div className="hamburger-menu">
                    <a href="" className="menu__logo">
                        <h3>Vlad Mirzoev</h3>
                    </a>
                    <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>   
                    <nav className="menu__box">
                        <ul>
                            <li className='menu__item'>
                                <a href="">About</a>
                            </li>
                            <li className='menu__item'>
                                <a href="">Projects</a>
                            </li>
                            <li className='menu__item'>
                                <a href="">Contacts</a>
                            </li>
                        </ul>
                    </nav>
                                    
                </div>
            </div>
        </header>
    )
}

export default NavBar;