import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
        <>
            <div className="nav-bar">
                <Link className="logo" to="/">
                    <img src={LogoS} alt="logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
                </Link>
                <nav className={showNav ? "mobile-show" : ""}>
                    <NavLink exact="true" activeclassname="active" to="/" onClick={() => showNav(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => showNav(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname='active' className="portfolio-link" to="/portfolio" onClick={() => showNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname='active' className="contact-link" to="/contact" onClick={() => showNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                    <FontAwesomeIcon
                        onClick={() => showNav(false)}
                        icon={faClose}
                        color="#ffd700"
                        size="3x"
                        className="close-icon" />
                </nav>
                <ul>
                    <li>
                        <a target="_blank" rel='noreferrer' href=''>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="">
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="">
                            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="">
                            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="skype:live:[user_name]">
                            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon
                    onClick={() => setShowNav(true)}
                    icon={faBars}
                    color="#ffd700"
                    size="3x"
                    className="hamburger-icon" />
            </div>
       </> 
    )
};

export default Sidebar;