import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import '../styles/Nav.css'

// On doit utiliser useLocation avec le router de react car l'url ne cahnge pas pour le navigateur
// impossible d'utiliser windows.location.pathname

function Nav(){
    const currentUrl = useLocation();
    return (
        <nav className = "acf-nav">
            <ul className = "acf-navlist">
                <li className = {currentUrl.pathname === "/" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to="/">La Boutique</Link></li>
                <li className = {currentUrl.pathname === "/workshop" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to="workshop">L'Atelier</Link></li>
                <li className = {currentUrl.pathname === "/news" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "news">Actualité</Link></li>
                <li className = {currentUrl.pathname === "/photo" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "photo">Galerie photo</Link></li>
                <li className = {currentUrl.pathname === "/contact" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
