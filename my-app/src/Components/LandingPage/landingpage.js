import Navbar from "./landingnavbar";
import "./landingpage.css";
function LandingPage() {
  return (
      <div>
   <div class="container">

        <div class="header">
            <img src="images/logo.png" class="logo"/>
            <nav>
            </nav>
            <button class="btn" id="btn1">Log In</button>
            <button class="btn" id="btn2">Sign Up</button>
        </div>


        <div class="content">
            <div class="text">
            <h1>Be Young, Have Fun, <br/> <span>Drink Pepsi</span></h1>
            <p>Pepsi is a carbonated soft drink manufactured by PepsiCo. <br/>Originally created and developed in 1893 by Caleb Bradham <br/>and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.
            </p>
            <button class="btn3">Buy Now</button>
           </div>
        <div class="pepsi">
        <img src="images/pepsi.png" alt=""/>
        </div>
       </div>
       
       
        </div>

        
       </div>

  );
}

export default LandingPage;
