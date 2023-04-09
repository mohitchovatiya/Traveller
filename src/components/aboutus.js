import classes from "./routes/Home.module.css";
import travel from "../images/about.jpg";
import  "../index.css";

const aboutus = () => {


    console.log("About");
    return (
        <div 
            style={{fontSize:"1.4rem"}} 
            className={classes.home}
        >
            
        <div id = "contaier">
             <div style={{textAlign:"center"}}>About Us - TOURS & TRAVELS</div><br/>

           <div>• Our philosophy stems from an old adage – leaving no stone unturned – which makes us reputable in Indian tour and travel circles.</div><br/>

            <div>At your fingertips are:<br/>
            Whether you know what type of trip you want, need to mix and match destinations in an itinerary, or want a specific theme-based India travel, we make it easy for you to strike the best travel plan. As our valuable suggestions by our experienced travel experts grace your India journey.<br/>
            •	Experienced travel experts with well-furnished India travel plans<br/>
            •	Theme based flexible India travel and holiday itineraries<br/>
            •	A wide choice of pre-package holidays</div><br/>



        
        </div>
        </div>
    )
}


export  default aboutus;