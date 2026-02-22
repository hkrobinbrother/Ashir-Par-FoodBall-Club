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
        interval={3000}
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
            className="relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]"
          >
            {/* Image */}
            <img
              src={img}
              alt={`slide-${index}`}
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                Welcome to Ashir Par Football Club
              </h2>
              <p className="text-sm md:text-lg mb-6 max-w-xl">
                Experience the thrill of the game and support your favorite team.
              </p>
              <button className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold transition">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
