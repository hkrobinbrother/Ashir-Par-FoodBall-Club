import React from "react";
import hero1 from "../../../assets/HERO.jpg";
const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hero1}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Ashir Par Football Club</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
