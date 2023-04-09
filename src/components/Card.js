import classes from './Card.module.css';
import PackageCard from './PackageCard';

const Card = props => {

    console.log(props.trips);

    const scrollHandlerRight = (e) => {
        const element = document.getElementById(props.id);
        const slideLeft = setInterval(()=>{
            element.scrollLeft += 6;
            console.log(element);
            // if(element.scrollLeft == 0){
            //     clearInterval(slideLeft);
            // }
            setTimeout(()=>{
                clearInterval(slideLeft);
            },896)
        }, 0);
    }

    const scrollHandlerLeft = (e) => {
        const element = document.getElementById(props.id);
        const slideLeft = setInterval(()=>{
            element.scrollLeft -= 6;
            console.log(element);
            setTimeout(()=>{
                clearInterval(slideLeft);
            },896)
        }, 0);
    }

 
    return (
        <div className={classes.card}>
            <h1>{props.title1}<button onClick={scrollHandlerRight} className={classes.scrollBtn}>&gt;</button><button onClick={scrollHandlerLeft} className={classes.scrollBtn}>&lt;</button></h1>
            <span>{props.title2}</span>
            <div id={props.id} className={classes.container}>
                {props.trips.map((trip)=>{
                    return <PackageCard key={trip.id} image={trip.image} title1={trip.country} title2={trip.startingPrice}/>
                })}
            </div>
        </div>
    )
}

export default Card;