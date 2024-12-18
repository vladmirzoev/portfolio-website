import '../styles/navBar.scss'
export const NavBar = () => {
    return (
        <>
            <div className="menu">
                <div className="menu-logo">
                    <h3>Vlad Mirzoev</h3>
                </div>
                <div className="menu-items">
                    <a href="" className="menu-items__item">About</a>
                    <a href="" className="menu-items__item">Projects</a>
                    <a href="" className="menu-items__item">Contacts</a>
                </div>
                <div className="menu-language">
                    <button className="menu-language__button">En</button>
                    <button className="menu-language__button">Nl</button>
                </div>
            </div>
            
            
        </>
    )
}

export default NavBar;