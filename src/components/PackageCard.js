import classes from './PackageCard.module.css';

const PackageCard = props => {
    console.log(props);
    return(
        <div className={classes.package} onClick={{}}>
            <img src={require(`../images/${props.image}`)}></img>
            <h3>{props.title1}</h3>
            <span>Starting at {props.title2} per person</span>
        </div>
    )
}

export default PackageCard;