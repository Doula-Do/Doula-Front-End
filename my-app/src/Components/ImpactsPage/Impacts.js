import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import "./impacts.css";
import Testimonial from "./testimonial";
import { useEffect } from "react";

function Impacts() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   const script2 = document.createElement('script');
  //   script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
  //   script.async = true;
  //   script2.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js";
  //   script2.async = true;
  //   document.body.appendChild(script);
  //   document.body.appendChild(script2);
  // return () => {
  //     document.body.removeChild(script);
  //     document.body.appendChild(script2);
  //   }
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="testimonials-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Testimonials </h2>
            <p className="text-center">
              Doulas have made such a huge impact with families! Read what they
              have to say below.
            </p>
          </div>
          <div className="row people">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="row people">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Impacts;
