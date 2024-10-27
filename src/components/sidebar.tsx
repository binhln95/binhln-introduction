import { Link } from "react-router-dom"
import { PageContext } from "../context/PageContext";
import { useContext, useRef, useState } from "react";
import { domain } from "./typs";

export const SideBar = () => {
    const context = useContext(PageContext);
    const [showHeader, setShowHeader] = useState<boolean>(false);
    return (
        <>
            <header id="header" className={showHeader ? "header dark-background d-flex flex-column header-show" : "header dark-background d-flex flex-column"}>
                <i className={showHeader ? "header-toggle d-xl-none bi bi-x" : "header-toggle d-xl-none bi bi-list"} onClick={() => setShowHeader(s => !s)}></i>

                <div className="profile-img">
                    <img src="assets/img/avatar-binhln.jpg" alt="" className="img-fluid rounded-circle" />
                </div>

                <a className="logo d-flex align-items-center justify-content-center">
                    <img src="assets/img/logo.png" alt="" />
                    <h1 className="sitename">Le Ngoc Binh</h1>
                </a>

                <div className="social-links text-center">
                {/* <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a> */}
                <a href="https://www.facebook.com/binhln596" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/nothing_foreverz" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.threads.net/@nothing_foreverz" target="_blank" className="google-plus"><i className="bi bi-threads"></i></a>
                <a href="https://www.linkedin.com/in/binhln95/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className="navmenu">
                <ul>
                    <li><Link to={domain + "/"} className={context.currentPage == 'Home' ? 'active' : ''}><i className="bi bi-house navicon"></i>Home</Link></li>
                    <li><Link to={domain + "/about"} className={context.currentPage == 'About' ? 'active' : ''}><i className="bi bi-person navicon"></i> About</Link></li>
                    <li><Link to={domain + "/resume"} className={context.currentPage == 'Resume' ? 'active' : ''}><i className="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
                    {/* <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
                    <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                    <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <li><a href="#">Dropdown 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">Deep Dropdown 1</a></li>
                            <li><a href="#">Deep Dropdown 2</a></li>
                            <li><a href="#">Deep Dropdown 3</a></li>
                            <li><a href="#">Deep Dropdown 4</a></li>
                            <li><a href="#">Deep Dropdown 5</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Dropdown 2</a></li>
                        <li><a href="#">Dropdown 3</a></li>
                        <li><a href="#">Dropdown 4</a></li>
                    </ul>
                    </li>
                    <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li> */}
                </ul>
                </nav>

            </header>
        </>
    )
}