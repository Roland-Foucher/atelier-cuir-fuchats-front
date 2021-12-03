import logo from '../assets/sac_michele_icone.jpeg'
import '../styles/Banner.css'

function Banner(){
    return( 
        <header className="acf-header">
            <img src={logo} alt="icone sac cuir" className = 'acf-logo'/>
            <h1 className = 'acf-titre'>Atelier Cuir Les Fuchats</h1>
        </header>
        )
    
}
export default Banner;