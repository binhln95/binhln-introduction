import { useContext } from "react";
import { PageContext } from "../context/PageContext";

export const Resume = () => {
    const context = useContext(PageContext);
    context.setCurrentPage!('Resume');
    return (
        <>
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>
                    I'm Binh, a hard-working and smart C# Engineer with 5 years of experience in strong .NET technologies such as 
                    Windows Form, ASP.NET MVC, ASP.NET Web API, and .Netcore and using Angular for frontend project. 
                    I am looking the position of Senior .net engineer to apply 5 years of experience to help the business achieve 
                    its strategic and operational goals by identifying new technology implementation opportunities.</p>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Sumary</h3>

                        <div className="resume-item pb-0">
                        <h4>LE NGOC BINH</h4>
                        <p><em>A .NET Software Engineer specializes in developing, maintaining, and enhancing applications using Microsoft’s .NET framework. They typically work with languages like C# and VB.NET to build applications ranging from web and desktop applications to cloud and enterprise systems. Their role encompasses the full software development lifecycle, including requirements gathering, design, coding, testing, and deployment. Key skills include proficiency in the .NET framework, ASP.NET for web applications, Entity Framework for data access, and knowledge of SQL databases.</em></p>
                        <ul>
                            <li>My Dinh 2, Nam Tu Liem, Ha Noi, Vietnam</li>
                            <li>+84 260 895</li>
                            <li>binhln95@gmail.com</li>
                        </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                        <h4>Engineer in computer engineering</h4>
                        <h5>2013 - 2018</h5>
                        <p><em>Hanoi university and science and technology</em></p>
                        <p>Information technology in school of information and communication technology</p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Fullstack Software engineer in Bosch</h4>
                            <h5>August 2024 - Present</h5>
                            <p><em>Ba Dinh Ha Noi, Vietnam </em></p>
                            <h4>1. Desktop Development</h4>
                            <ul>
                                <li>Technology: .net framework, Flutter. </li>
                                <li>Management Code: git</li>
                                <li>Architecture: Clean Architecture</li>
                                <li>
                                    Responsibility
                                    <ul>
                                        <li>Maintain source code in .net. Refactor the source code to optimize application. The project is refactored for easy maintenance and performance increase 30%.</li>
                                        <li>Make clearly requirement with India team. Usually meeting with India team to clear requirement and feedback about feature to improve. </li>
                                        <li>Develop new feature on mobile platform. Learn new technology, take part design new application by apply architechture, library, design pattern.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Fullstack Software engineer in Pixelz</h4>
                            <h5>April 2023 - August 2024</h5>
                            <p><em>Cau Giay Ha Noi Vietnam</em></p>
                            <h4>1. NBE</h4>
                            <ul>
                                <li>Technology: .Net core, Web Api, Web MVC C#, React, Angular, Html, Css, Js.</li>
                                <li>Database: SQL server</li>
                                <li>Management Code: git</li>
                                <li>Architecture: Clean Architecture, DDD architecture</li>
                                <li>Infrastructure: AWS</li>
                            </ul>
                            <h4>2. React component library</h4>
                            <ul>
                                <li>Technology: React, Html, Css, Js</li>
                                <li>Management Code: git</li>
                                <li>Infrastructure: AWS</li>
                            </ul>
                            <h4>Responsibility</h4>
                            <ul>
                                <li>Direct product team meeting to clarify and refine requirements. Advise and attend to design feature</li>
                                <li>Write technical design document for implementation feature. </li>
                                <li>Coordinate small team with for each feature. Segregate small ticket and assign for member. Review source code and take responsibility quality of feature</li>
                                <li>Take part in designing the software solution. Design model software, build source code base and implement feature in clude Backend and Frontend</li>
                                <li>Implementing and strategizing unit testing to ensure reliability and performance include unit test, integration test, automation test</li>
                                <li>Support DevOps team for operation software application</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>.Net Engineer in PG Bank</h4>
                            <h5>May 2021 - April 2023</h5>
                            <p><em>Dong Da, Ha Noi, Vietnam</em></p>
                            <h4>1. Website company</h4>
                            <ul>
                                <li>Technology: Web form C#, Html, Css, Js, Angular</li>
                                <li>Database: Oracle</li>
                                <li>Management Code: git</li>
                            </ul>
                            <h4>2. Business System</h4>
                            <ul>
                                <li>Technology: Web form C#, Html, Css, Js, DevExpress</li>
                                <li>Database: Oracle</li>
                                <li>Management Code: Git</li>
                            </ul>
                            <h4>3. API for mobile</h4>
                            <ul>
                                <li>Technology: Web api C#, web service C#</li>
                                <li>Database: Oracle</li>
                                <li>Management Code: Git</li>
                            </ul>
                            <h4>Responsibility</h4>
                            <ul>
                                <li>Implement feature follow requirement.</li>
                                <li>Connect with another department to maintain and operate software. Receive demand from client for mistake.</li>
                                <li>Support operation team to deploy or trace log</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>.Net Engineer in Robotcom and FA.com</h4>
                            <h5>June 2018 - May 2021</h5>
                            <p><em>Cau Giay, Ha Noi, Vietnam</em></p>
                            <h4>1. System management smart factory</h4>
                            <ul>
                                <li>Technology: C# WPF, HTML, CSS, JS</li>
                                <li>Database: Posgre SQL</li>
                                <li>Management Code: SVN</li>
                            </ul>
                            <h4>2. System control a cargo-carrying robot</h4>
                            <ul>
                                <li>Technology: C# winform. PL SQL</li>
                                <li>Database: SQL server</li>
                                <li>Management Code: SVN</li>
                            </ul>
                            <h4>3. System sell Seafood in android app</h4>
                            <ul>
                                <li>Technology: Android, Kotlin, Java</li>
                                <li>Database: SQL server</li>
                                <li>Management Code: SVN</li>
                            </ul>
                            <h4>Responsibility</h4>
                            <ul>
                                <li>Attend to analysis the requirement from client</li>
                                <li>Attend to design software with my team</li>
                                <li>Implement feature</li>
                                <li>Fix bug and solve problem</li>
                                <li>Write Unit test, Integration test</li>
                                <li>Deploy and support customer to operate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}