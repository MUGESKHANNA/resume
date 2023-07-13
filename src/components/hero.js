import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <>
                <section id="hero" className="d-flex flex-column justify-content-center">
                    <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Mugeskhanna Anandhan</h1>
                        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Developer</span></p>
                        <div className="social-links">
                            <a href="https://twitter.com/Muges_Khanna?t=i1NVh_YrGTPDpXLtlvBwRA&s=08"target="_blank"className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/jayalakshmi.mugeshkhanna"target="_blank"className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/_muges_khanna_anandhan_/"target="_blank"className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="https://www.linkedin.com/in/muges-khanna-anandhan-bb0326197"target="_blank"className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default Hero;