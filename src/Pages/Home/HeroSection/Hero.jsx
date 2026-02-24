import { useState } from "react";
import hero1 from "../../../../public/b2.png";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText =
    "Ashir Par Football Club was established to inspire young talents, promote sportsmanship, and create a strong football culture in our community. The club was founded with the vision of providing a platform where passionate players can develop their skills, build teamwork, and represent our area with pride. This website was created to share club updates, match results, achievements, and to connect supporters with our football journey. Together, we aim to grow, compete, and achieve success both on and off the field. ⚽🔥";

  const shortText = fullText.slice(0, 120);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-500 leading-tight">
              Ashir Par Football Club
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              {showMore ? fullText : shortText}
              {!showMore && "..."}
            </p>

            <div className="mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition duration-300 text-white font-semibold shadow-lg"
              >
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={hero1}
              alt="Hero"
              className="w-72 sm:w-80 md:w-96 lg:w-[450px] rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;