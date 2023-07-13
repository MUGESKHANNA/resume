import React from "react";

class Header extends React.Component {
    render() {
        return (
            <>
                <header id="header" className="d-flex flex-column justify-content-center">

                    <nav id="navbar" className="navbar nav-menu">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-clipboard-data"></i> <span>Skills</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>

                </header>
            </>

        );
    }
}

export default Header;