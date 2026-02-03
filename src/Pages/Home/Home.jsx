
import Navbar from '../../Components/Common/Header/Navbar';
import Banner from './Banner/Banner';
import FeaturedPlayers from './FeaturedPlayers/FeaturedPlayers';
import Hero from './HeroSection/Hero';
import LatestResult from './LatestResult/LatestResult';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Hero></Hero>
            <FeaturedPlayers></FeaturedPlayers>
            <LatestResult></LatestResult>
        </div>
    );
};

export default Home;