import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import "./impacts.css"; 
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
      <div class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Testimonials </h2>
                <p class="text-center">Doulas have made such a huge impact with families! Read what they have to say below.</p>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">
“You know how they say it takes a village to raise a baby? Well, one good doula is equal to that whole village!”</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="/>
                        <h5 class="name">— Emily D.</h5>
                        <p class="title">CEO of Company Inc.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">“Dear Triangle Mothercare, a simple ‘thank you’ seems so inadequate in response to your unbelievable services."</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="/>
                        <h5 class="name">- Elizabeth, Durham</h5>
                        <p class="title">Founder of Style Co.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">"I am writing to thank you for all your love and support during the first few months of our son’s life."</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="/>
                        <h5 class="name">- Zoe, Chapel Hill</h5>
                        <p class="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer />
    </div>
  );
}

export default Impacts;