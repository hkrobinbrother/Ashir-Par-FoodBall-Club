import React from "react";

const FeaturedPlayers = () => {
  return (
    <div className="container mx-auto mt-6">
       <div className="flex justify-center mb-8">
         <h1 className="text-3xl font-bold text-red-500">Featured Players</h1>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="card card-side bg-base-100 shadow-sm">
          <figure className="w-1/2">
            <img
            className="max-w-62"
              src="https://i.ibb.co.com/Gv3TwW9c/pexels-omar-ramadan-1739260-26630669.jpgp"
              alt="Movie"
            />
          </figure>
          <div className="text-center w-1/2 flex flex-col  space-y-3 justify-center">
            <h2 className="text-3xl">ARMAN HOSSIN</h2>
            <p className="text-xl">Position : STRIKER</p>
            <h1 className="text-xl">Jarsi Number : 11</h1>
            
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayers;
