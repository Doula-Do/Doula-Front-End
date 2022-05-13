import React from 'react'
import Navbar from './Navbar.js';
import Footer from './footer.js';
import familyimg from '../images/familyimg.jpeg'
function Homepage() {
    return(
        <div>
        <Navbar/>
        <h4>DoulaDo is a community-based application that allows expecting parent(s) to connect with caring, supportive, and experience Doula's in their neighborhood.</h4>
        <h4>Approach birth as an opportunity to have an adventureon the way to meeting your baby (rather than ordeal to be endured).
-Anna Wilde</h4>
        <form className='zipCodeForm'>
            <label>Enter your Zip Code and Find a Doula Near You!
                <br></br>
            <input type="text" name="name" />
            </label>
        </form>
        <Footer/>
        </div>
    )
}
export default Homepage