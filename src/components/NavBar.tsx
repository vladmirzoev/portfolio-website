import '../styles/navBar.scss'
export const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div className="menu">
                    <a href="" className="menu__logo">
                        <h3>Vlad Mirzoev</h3>
                    </a>

                    <nav className="navigation">
                        <ul>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    <span className="navigation__controls">
                        {/* TODO */}
                    </span>
                </div>
            </div>
        </header>
    )
}

export default NavBar;