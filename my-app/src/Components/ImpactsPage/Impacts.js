import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import "./impacts.css";
import { useEffect } from "react";

function Impacts() {
  return (
    <div>
      <Navbar />
      <div className="testimonials-clean contentBody">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Testimonials </h2>
            <p className="text-center">
              Doulas have made such a huge impact with families! Read what they
              have to say below.
            </p>
          </div>
          <div className="carousel slide demo" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <p>
                    “You know how they say it takes a village to raise a baby?
                    Well, one good doula is equal to that whole village!”
                  </p>
                  <img src="https://i.imgur.com/lE89Aey.jpg" />
                  <div className="image-caption">— Emily D.</div>
                  <p className="title">CEO of Company Inc.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    If Shai Reznik's TDD videos don't convince you to add
                    automated testing your code, I don't know what will.This was
                    the very best explanation of frameworks for brginners that
                    I've ever seen.
                  </p>
                  <img
                    src="https://i.imgur.com/QptVdsp.jpg"
                    className="img-fluid"
                  />
                  <div className="image-caption">Cromption Greves</div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    If Shai Reznik's TDD videos don't convince you to add
                    automated testing your code, I don't know what will.This was
                    the very best explanation of frameworks for brginners that
                    I've ever seen.
                  </p>
                  <img
                    src="https://i.imgur.com/jQWThIn.jpg"
                    className="img-fluid"
                  />
                  <div className="image-caption">Harry Mon</div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" data-slide="prev">
              <i className="fas fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" data-slide="next">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          {/* <div className="row people">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
          <div className="row people">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Impacts;
