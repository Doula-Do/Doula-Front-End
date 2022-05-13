import Footer from "../footer";
import Navbar from "../Navbar";
import "./impacts.css"; 

function Impacts() {
  return (
    <div>
      <Navbar />
      <div className="impactsImgContainer">
        <img
          className="impactsImg"
          src="https://truthout.org/wp-content/uploads/2019/04/2019_0421-black-family-1200x800.jpg"
        />
      </div>
      <div className="impactsPosts">
        <h1>Impacts of doulas</h1>
      </div>
      <div className="impacts">
        <p>
          “You know how they say it takes a village to raise a baby? Well, one
          good doula is equal to that whole village!” — Emily D.
        </p>
        <p>
          “Dear Triangle Mothercare, a simple ‘thank you’ seems so inadequate in
          response to your unbelievable services." - Elizabeth, Durham
        </p>
        <p>
          "I am writing to thank you for all your love and support during the
          first few months of our son’s life." - Zoe, Chapel Hill
        </p>
        <p>
          “Triangle Mothercare was an absolute lifesaver for our family! My
          husband and I were extremely pleased with the level of service we
          received. TMC took care of all the details, truly listened to our
          needs and placed us with the perfect doula (Heather)!"
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Impacts;