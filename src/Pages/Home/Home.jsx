import Banner from "./Banner/Banner";
import FeaturedPlayers from "./FeaturedPlayers/FeaturedPlayers";
import Hero from "./HeroSection/Hero";
import LatestNews from "./LatestNews/LatestNews";
import LatestResult from "./LatestResult/LatestResult";
import NextMatch from "./NextMatch/NextMatch";
const Home = () => {
  return (
    <div className="space-y-14">
      <Banner></Banner>
      <Hero></Hero>
      <FeaturedPlayers></FeaturedPlayers>
      <LatestResult></LatestResult>
      <NextMatch></NextMatch>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
