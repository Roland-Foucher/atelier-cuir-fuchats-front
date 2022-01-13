import logo from '../assets/logo/sac_michele_icone.jpeg'
import burger from '../assets/logo/burger.png'
import cartIco from "../assets/logo/cartIco.svg"
import '../styles/Banner.css'
import { Link } from 'react-router-dom';

function Banner({ showMenu, setShowMenu, cart }) {

    // toggle menu burger on/off on smartphone
    function toggleMenu() {
        if (showMenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }
    let cartCount = 0
    cart.forEach(element => {
        cartCount += element.amount;
    });

    return (
        <header className="acf-header">

            <div className='acf-header-full-title'>
                <img src={logo} alt="icone sac cuir" className='acf-logo' />
                <h1 className='acf-titre'>Atelier Cuir Les Fuchats</h1>
            </div>
            <div className='acf-header-logos'>
                <img src={burger}
                    alt="menu"
                    className='acf-burger'
                    onClick={toggleMenu}
                />
                <div className="acf-header-cart">
                    
                    <Link to="/cart"><img src={cartIco} alt="panier" className='acf-header-cart-logo' /></Link>
                    <div className='acf-header-cart-count'>
                        {cartCount}
                    </div>
                </div>
            </div>

        </header>
    )

}
export default Banner;