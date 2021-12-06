import { Link } from "react-router-dom";
import '../styles/Nav.css'


function Nav(){
    const currentUrl = window.location.pathname
    console.log(currentUrl)
    return (
        <nav className = "acf-nav">
            <ul className = "acf-navlist">
                <li className = {currentUrl === "/" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to="/">La Boutique</Link></li>
                <li className = {currentUrl === "/workshop" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to="workshop">L'Atelier</Link></li>
                <li className = {currentUrl === "/news" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "news">Actualité</Link></li>
                <li className = {currentUrl === "/photo" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "photo">Galerie photo</Link></li>
                <li className = {currentUrl === "/contact" ? "acf-navitem acf-navitem-current" : "acf-navitem"}><Link to= "contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
