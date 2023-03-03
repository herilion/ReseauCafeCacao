import { Link } from 'react-router-dom';
import {
    TfiFacebook,
    TfiTwitterAlt
} from 'react-icons/tfi';
import { IoLogoYoutube } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import './style.css';

const NavBar = () => {
    return (
        <>
            <header className='header'>
                <div>
                    <h6>Réseaux Café Cacao</h6>
                </div>
                <div className='top-icons-container'>
                    <h6>Réseaux Café Cacao</h6>
                    <Link to='https://facebook.com' target="_blank"><TfiFacebook /></Link>
                    <Link to='https://twitter.com' target="_blank"><TfiTwitterAlt /></Link>
                    <Link to='https://youtube.com' target="_blank"><IoLogoYoutube /></Link>
                    <Link to='https://gmail.com' target="_blank"><GrMail /></Link>
                </div>
            </header>
            <nav className='navbar'>
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="website logo" style={{ width: 90 }} />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <ul className='navbar-links'>
                        <li>
                            <Link to="/ok">ACCEUIL</Link>
                        </li>
                        <li><Link to="/ok">PROGRAMMES</Link></li>
                        <li class="dropdown">
                            <span class="dropbtn">NOS MEMBRES</span>
                            <div class="dropdown-content">
                                <a href="#">DEVENIR MEMBRES</a>
                                <a href="#">LISTE DES MEMBRES</a>
                                <a href="#">MEMBRE DU MOIS</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <span className="dropbtn">Dropdown 22</span>
                            <div className="dropdown-content">
                                <a href="#">Link 22</a>
                                <a href="#">Link 222</a>
                                <a href="#">Link 223</a>
                            </div>
                        </li>
                        <li><Link to="/ok">NOUVELLES</Link></li>
                        <li><Link to="/ok">RESSOURCES</Link></li>
                        <li><Link to="/ok">A PROPOS</Link></li>
                        <li><Link to="/ok">CONTACT</Link></li>
                    </ul>
                    <div className='top-search-icon'>
                        <BiSearch />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;