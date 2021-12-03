import '../styles/Nav.css'

function Nav(){
    return (
        <nav className = "acf-nav">
            <ul className = "acf-navlist">
                <li className = "acf-navitem"><a href="#">La Boutique</a></li>
                <li className = "acf-navitem"><a href="#">L'atelier</a></li>
                <li className = "acf-navitem"><a href="#">Actualité</a></li>
                <li className = "acf-navitem"><a href="#">Galerie photo</a></li>
                <li className = "acf-navitem"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;