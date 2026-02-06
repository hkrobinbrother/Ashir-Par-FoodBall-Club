import img1 from "../../../../public/b2.png";
import img2 from "../../../../public/banner1.jpeg";
import img3 from "../../../../public/b3.png";
import img4 from "../../../../public/b4.png";
import img5 from "../../../../public/b5.png";

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
            <img className="h-full w-full object-cover" src={img2} />
          </div>
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img3} />
          </div>
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img4} />
          </div>
          <div  className="h-200" >
            <img className="h-full w-full object-cover" src={img5} />
          </div>
          
        </Carousel>
      </div>
        </div>
    );
};

export default Banner;