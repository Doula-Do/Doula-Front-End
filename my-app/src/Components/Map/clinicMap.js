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
        <h2 className="text-center top" >Find a Doula Near You!</h2>
        {/* <div className='Map'> */}
        <DoulaMapLoader className= 'Map'/>
        {/* </div> */}
        <Footer/>
        </div>
    )
}
export default Homepage