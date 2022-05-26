import Navbar from "../navbar/Navbar";
import Menu from "../Home/menu";
import ConnectedDoulas from "../Home/doulasConnected";
import "./impacts.css";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function Impacts() {
  const { isAuth } = useContext(AppContext);

  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <div>
      <Navbar />
      <div className="page-inner no-page-title pageContainer">
        <div id="main-wrapper">
          <div className="row">
            <div className="col-lg-5 col-xl-3">
              <div className="card card-white grid-margin">
                <div className="card-heading clearfix">
                  <h4 className="card-title text-center">Menu</h4>
                </div>
                <Menu />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div
                className="container p-2"
                style={{ backgroundColor: "white" }}
              >
                <div className="intro">
                  <h2 className="text-center">Testimonials </h2>
                  <p className="text-center p-3">
                    Doulas have made such a huge impact with families! Read what
                    they have to say below.
                  </p>
                </div>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="carousel-caption d-none d-md-block">
                        <p>
                          “You know how they say it takes a village to raise a
                          baby? Well, one good doula is equal to that whole
                          village!”
                        </p>
                        <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" />
                        <div className="image-caption">— Emily D.</div>
                        <p className="title">CEO of Company Inc.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-caption d-none d-md-block">
                        <p>
                          “You know how they say it takes a village to raise a
                          baby? Well, one good doula is equal to that whole
                          village!”
                        </p>
                        <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" />
                        <div className="image-caption">— Emily D.</div>
                        <p className="title">CEO of Company Inc.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="carousel-caption d-none d-md-block">
                        <p>
                          “You know how they say it takes a village to raise a
                          baby? Well, one good doula is equal to that whole
                          village!”
                        </p>
                        <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" />
                        <div className="image-caption">— Emily D.</div>
                        <p className="title">CEO of Company Inc.</p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon Arrow"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon Arrow"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-3">
              <ConnectedDoulas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impacts;
