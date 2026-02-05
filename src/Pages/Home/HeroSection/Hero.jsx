import { useState } from "react";
import hero1 from "../../../assets/HERO.jpg";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText =
    "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. This football club was founded with passion and dedication, aiming to develop young talents and compete at the highest level.";

  const shortText = fullText.slice(0, 100);

  return (
    <div>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero1}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div>
            <h1 className="text-5xl font-bold text-red-400">
              Ashir Par Football Club
            </h1>

            <p className="py-6">
              {showMore ? fullText : shortText}
              {!showMore && "..."}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="btn btn-primary"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
