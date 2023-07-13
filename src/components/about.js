import React from "react";

class About extends React.Component {
    render() {
        return (
            <>
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>About</h2>
                            <p>To be a member of a corporate organization and acquire a demanding job that will allow me to broaden my experience, learning, knowledge, and abilities while also having a significant effect on the team's and company's growth and development.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4">
                                <img src="assets/img/profile1.jpg" class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Spring Boot & Web Developer.</h3>
                                <p class="fst-italic">
                                Life isn't about figuring out who you are. In every stage of your life, you are creating yourself.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>8 June 2000</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Villupuram,Tamil Nadu</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.E (Electronics & Communication)</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                Aside from work, I use it to solve puzzles, gain new technical skills, develop my soft skills, play badminton, and exercise.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </>

        );
    }
}

export default About;