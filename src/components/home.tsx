import { useContext } from "react";
import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import { PageContext } from "../context/PageContext";

export const Home = () => {
    const context = useContext(PageContext);
    context.setCurrentPage!('Home');
    const ref = useRef<HTMLSpanElement>(null);
    const typed = useRef<Typed>();
    
    useEffect(() => {
        const options : TypedOptions = {
            strings: [
            ' Engineer',
            ' Developer',
            ' Freelancer'
          ],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        };
        typed.current = new Typed(ref.current, options);
        typed.current.start();
        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };

    }, []);
    return (
        <>
            <img src="assets/img/background.jpg" alt="" data-aos="fade-in" className=""  />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Le Ngoc Binh</h2>
                <p>I'm 
                    <span ref={ref} style={{marginLeft: 10}} />
                </p>
            </div>
        </>
    )
}