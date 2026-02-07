import img1 from "../../../../public/b2.png";
import img2 from "../../../../public/banner1.jpeg";
import img3 from "../../../../public/b3.png";
import img4 from "../../../../public/b4.png";
import img5 from "../../../../public/b5.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators
        stopOnHover={false}
        swipeable
      >
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <div
            key={index}
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
