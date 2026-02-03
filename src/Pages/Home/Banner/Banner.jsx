import img1 from "../../../assets/banner1.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div>
            <div className="">
        <Carousel
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          stopOnHover={false}
          
        >
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img1} />
          </div>
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img1} />
          </div>
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img1} />
          </div>
          
        </Carousel>
      </div>
        </div>
    );
};

export default Banner;