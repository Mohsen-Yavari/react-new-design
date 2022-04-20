import {Link, NavLink} from "react-router-dom";
import "./sidebar.scss";
import logoS from "../../assets/images/logo-s.png";
import logoSubTitle from "../../assets/images/logo_sub.png";


const Sidbar = () => (

        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={logoS} alt="logo" />
                <img className="sub-logo" src={logoSubTitle} alt="logosub" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <i class="ri-home-smile-2-fill"></i>
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <i class="ri-user-fill"></i>            </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <i class="ri-mail-settings-line"></i>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/in/mohsen-yavari-106ab0216/"
                    >
                        <i class="ri-linkedin-box-fill"></i>
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Mohsen-Yavari/kaktus.project"
                    >
                        <i class="ri-github-fill"></i>
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/mohsenyavarei/"
                    >
                       <i class="ri-instagram-line"></i>
                    </a>
                </li>
            </ul>
        </div>
    );


export default Sidbar;
