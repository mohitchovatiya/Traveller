import React from 'react';
import classes from "./routes/Home.module.css";
// import offer from '../../../Images/Booking/ad.png';
// import offer from "../images/offer.jpg";

const Offers =() => {

    return (
        <div 
        style={{fontSize:"1.4rem"}} 
        className={classes.home}
    >
        <div className='container mt-3'>
            <div className="form-group textcenter">
                <b>
                    <label className="mt-3 font-18">
                        Offers
                    </label>
                </b>
            </div>
            
        </div>
        </div>
    );
}


export default Offers;


