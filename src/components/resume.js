import React from "react";

class Resume extends React.Component {
    render() {
        return (

            <>
                <section id="resume" class="resume">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Resume</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <h3 class="resume-title">Sumary</h3>
                                <div class="resume-item pb-0">
                                    <h4>Mugeskhanna A</h4>
                                    <p><em>Junior Software Developer with 18 months of engineering experience seeks collaborative environment to develop quality software solutions for business challenges.</em></p>
                                    <ul>
                                        <li>Plot No:11,Sri Ragavendhra Nagar,2ND Street,Vandimedu,Villupuram,Tamil Nadu</li>
                                        <li>(+91)9597281418</li>
                                        <li>smugeshkhanna@gmail.com</li>
                                    </ul>
                                </div>
                                <h3 class="resume-title">Education</h3>
                                <div class="resume-item">
                                    <h4>B.E (Electronics & Communication)</h4>
                                    <h5>2018 - 2022</h5>
                                    <h5>CGPA : 8.11</h5>
                                    <p><em>IFET College Of Engineering , Villupuram</em></p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h3 class="resume-title">Professional Experience</h3>
                                <div class="resume-item">
                                    <h4>Project Engineer</h4>
                                    <h5>2022 - Present</h5>
                                    <p><em>Wipro Pvt Ltd, Chennai </em></p>
                                    <ul>
                                        <li>Contributed to the development and maintenance of web applications, which resulted in greater functionality and increased customer satisfaction.</li>
                                    </ul>
                                </div>
                                <h3 class="resume-title">Certifications</h3>
                                <div class="resume-item">
                                    <ul>
                                        <p><em>Spring Boot</em></p>
                                        <p><em>MicroServices</em></p>
                                        <p><em>MERN Stack</em></p>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}

export default Resume;