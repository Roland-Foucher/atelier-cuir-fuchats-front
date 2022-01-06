import logo from '../assets/logo/sac_michele_icone.jpeg'
import burger from '../assets/logo/burger.png'
import '../styles/Banner.css'

function Banner({ showMenu, setShowMenu }) {

    // toggle menu burger on/off on smartphone
    function toggleMenu() {
        if (showMenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    return (
        <header className="acf-header">
            <img src={logo} alt="icone sac cuir" className='acf-logo' />
            <h1 className='acf-titre'>Atelier Cuir Les Fuchats</h1>
            <img src={burger}
                alt="menu"
                className='acf-burger'
                onClick={toggleMenu}
            />
        </header>
    )

}
export default Banner;