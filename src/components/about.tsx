import { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContext";

export const About = () => {
    const context = useContext(PageContext);
    context.setCurrentPage!('About');
    const [active, setActive] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 100)
    }, []);
    return (
        <>
        {active && 
            <>
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>About</h2>
                    <p>I'm Binh, a hard-working and smart C# Engineer with 5 years of experience in strong .NET technologies such as Windows Form, ASP.NET MVC, ASP.NET Web API, and .Netcore and using Angular for frontend project. I am looking the position of Senior .net engineer to apply 5 years of experience to help the business achieve its strategic and operational goals by identifying new technology implementation opportunities.</p>
                </div>
                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="assets/img/avatar-binhln.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Software Engineer.</h2>
                            {/* <p className="fst-italic py-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 Aug 1995</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://www.linkedin.com/in/binhln95/</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+84 260 895</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hanoi, Vietnam</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's degree</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>binhln95@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <p className="py-3">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p> */}
                        </div>
                    </div>
                </div>
            </>
        }
        </>
    )
}