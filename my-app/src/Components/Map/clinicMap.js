import './clinicMap.css'
import React from 'react'
import Navbar from '../navbar/Navbar.js';
import Footer from '../footer/footer.js';
import DoulaMapLoader from './DoulaMap/Map.js';

// import familyimg from '../images/familyimg.jpeg'
function Homepage() {
    return(
        <div className='background'>
        <Navbar/>
        <div className='pagebody' >
        <h4 className='Main'>DoulaDo is a community-based application that allows expecting parent(s) to connect with caring, supportive, and experience Doula's in their neighborhood.</h4>
        <h4 className='Main'>Approach birth as an opportunity to have an adventureon the way to meeting your baby (rather than ordeal to be endured).
-Anna Wilde</h4>
<h2>Find a Doula Near You!</h2>
        </div>
        
        
        <div className= 'Map'>
        <DoulaMapLoader className= 'Map'/>
        </div>
        <Footer/>
        </div>
    )
}
export default Homepage