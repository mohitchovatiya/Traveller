import classes from './Home.module.css';
import Card from '../Card';

const Home = props => {

    const intDestinations = [
        {
            id: 1,
            image: 'int4.jpg',
            country: 'Thailand',
            startingPrice: '38,200',
        },
        {
            id: 2,
            image: 'int10.jpg',
            country: 'Sri Lanka',
            startingPrice: '13,400',
        },
        {
            id: 3,
            image: 'int6.jpg',
            country: 'Dubai',
            startingPrice: '10,000',
        },
        {
            id: 4,
            image: 'int7.jpg',
            country: 'Mauritius',
            startingPrice: '19,500',
        },
        {
            id: 5,
            image: 'int8.jpg',
            country: 'Turkey',
            startingPrice: '21,300',
        },
        {
            id: 6,
            image: 'int9.jpg',
            country: 'Russia',
            startingPrice: '49,000',
        },
    ]

    const newDestinations = [
        {
            id: 1,
            image: 'new1.jpeg',
            country: 'Switzerland',
            startingPrice: '30,200',
        },
        {
            id: 2,
            image: 'new2.jpg',
            country: 'United Kingdom',
            startingPrice: '47,400',
        },
        {
            id: 3,
            image: 'new3.jpg',
            country: 'Seychelles',
            startingPrice: '82,500',
        },
        {
            id: 4,
            image: 'new4.jpg',
            country: 'Singapore',
            startingPrice: '44,000',
        },
        {
            id: 5,
            image: 'new5.jpg',
            country: 'Nepal',
            startingPrice: '11,500',
        },
        {
            id: 6,
            image: 'new6.jpg',
            country: 'France',
            startingPrice: '23,400',
        },
        {
            id: 7,
            image: 'new7.jpg',
            country: 'Egypt',
            startingPrice: '12,200',
        },
    ]

    return (
        <div className={classes.home}>
            <Card trips={intDestinations} id="firstDiv" title1="International Destinations" title2="Travel the world with our International best-sellers!" />
            <Card trips={newDestinations} id="secondDiv" title1="Hot &amp; New" title2="Checkout our brand new Deals!" />
        </div>
    );
}

export default Home;