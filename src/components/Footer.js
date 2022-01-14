import { Link } from "react-router-dom";
import '../styles/Footer.css'



function Footer() {
    return (
        <footer className="acf-footer">
            <ul className="acf-footer-list">
                <li className="acf-footer-list-item"><Link to="mention-legal">Mentions Légales</Link></li>
                <li className="acf-footer-list-item"> <Link to="contact">Contacts</Link></li>
            </ul>
            <ul className="acf-footer-list acf-footer-admin">
                <li className="acf-footer-list-item"><Link to="admin">Admin</Link></li>

            </ul>
        </footer>
    )
}

export default Footer;