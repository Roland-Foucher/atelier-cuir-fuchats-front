import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import '../styles/Nav.css'

// On doit utiliser useLocation avec le router de react car l'url ne cahnge pas pour le navigateur
// impossible d'utiliser windows.location.pathname

function Nav({ showMenu }) {

    const currentUrl = useLocation();

    // methode to set style to nav if navItem is current URL
    const changeNavStyle = (url) => {
        return currentUrl.pathname === url ? "acf-navitem acf-navitem-current " : "acf-navitem";
    }

    // switch style navbar between smartphone and desktop
    const showMenuStyle = () => {
        return showMenu ? "acf-nav" : "acf-nav-none";
    }

    return (
        <nav className={showMenuStyle()}>
            <ul className="acf-navlist">
                <li className={changeNavStyle("/")}><Link to="/">La Boutique</Link></li>
                <li className={changeNavStyle("/workshop")}><Link to="workshop">L'Atelier</Link></li>
                <li className={changeNavStyle("/news")}><Link to="news">Actualité</Link></li>
                <li className={changeNavStyle("/photo")}><Link to="photo">Galerie photo</Link></li>
                <li className={changeNavStyle("/contact")}><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
