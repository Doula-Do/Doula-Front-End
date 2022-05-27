import Navbar from "./landingnavbar";
import preggo from "./doulacare.jpeg";
import doula1 from "./Doula.jpeg";
import doula2 from "./whatisdoula.jpeg";
import doula3 from "./doulabenefits.png";
import Homepage from "../Map/clinicMap";
import andrew from "./andrew.jpg"
import kay from "./kay.PNG"
import matt from "./matt.jpg"
import yaya from "./yaya.jpg"
import "./landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
function LandingPage() {
  return (
    <div class="mainpage">
      {/* <Navbar/> */}
      <div class="container">
        <div class="header">
          {/* <img src="images/logo.png" class="logo"/> */}
          <nav>
            <h5 className="d-inline-block align-text-top mt-3 name typed-out">
              DoulaDo
            </h5>
          </nav>

          <button class="btn" id="btn1">
            Log In
          </button>
          <button class="btn" id="btn2">
            Sign Up
          </button>
        </div>

        <div class="content">
          <div class="text">
            <h1>
              Our mission is to connect families of marginalized communities to
              Doulas
              <br /> <span></span>
            </h1>
            <img className="preggo" src={preggo} alt="" />
            <p>
              Families/women having access to doulas are shown to bring down
              mortality rates, lessen birthing time, and create an overall
              better experience of baby to mother bonding.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Homepage />
      <br></br>
      <div className="doulacarousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={doula2} class="d-block w-100 h-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={doula1} class="d-block w-100 h-100" b alt="..." />
            </div>
            <div class="carousel-item">
              <img src={doula3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* <div className='engineers'>
          <div class="card">
            <img src={andrew} class="card-img-top" alt=".." />
            <div className="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style={{ width: "5rem 5rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="www.linkedin.com/in/andrew-enoe"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
            
            
            
            
            
            
            <div class="card">
            <img src={kay} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style={{ width: "5rem 5rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="www.linkedin.com/in/andrew-enoe"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
          
          
          
          
          
          <div class="card">
            <img src={yaya} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style={{ width: "5rem 5rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="www.linkedin.com/in/andrew-enoe"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
          
          
          
          <div class="card">
            <img src={matt} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text" style={{ width: "5rem 5rem" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="www.linkedin.com/in/andrew-enoe"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
