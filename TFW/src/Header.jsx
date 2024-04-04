import logo from './assets/TFW.png';

function Header() {
    return(
        <>
            <header className="header">
                <nav className="header-nav">
                    <div className="logo-container align-items-center">
                        <img src={logo} alt="TFW Logo" className="logo" />
                        <p>[meno skupiny] {/*Meno*/}</p>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><a href="" className="link">O NÁS</a></li>
                        <li className="nav-item"><a href="" className="link">NAŠE ODVĚTVÍ</a></li>
                        <li className="nav-item"><a href="" className="link"></a></li>
                        <li className="nav-item"><a href="" className="link"></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;