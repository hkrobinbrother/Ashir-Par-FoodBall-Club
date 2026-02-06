import React from "react";

const FeaturedPlayers = () => {
  return (
    <div className="container mx-auto mt-6">
       <div className="flex justify-center mb-8">
         <h1 className="text-3xl font-bold text-red-500">Featured Players</h1>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="card card-side bg-base-100 shadow-sm">
          <figure className="w-1/3">
            <img
            className="max-w-62"
              src="https://i.ibb.co.com/4Ds7jjy/Screenshot-2026-02-06-212003.png"
              alt="Movie"
            />
          </figure>
          <div className="text-center w-2/3 flex flex-col  space-y-3 justify-center">
            <h2 className="text-3xl">ARMAN HOSSIN</h2>
            <p className="text-xl">Position : STRIKER</p>
            <h1 className="text-xl">Jarsi Number : 11</h1>
            
          </div>
         
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure className="w-1/3">
            <img
            className="max-w-62"
              src="https://i.ibb.co.com/JjtMx8sD/Screenshot-2026-02-06-212020.png"
              alt="Movie"
            />
          </figure>
           <div className="text-center w-2/3 flex flex-col  space-y-3 justify-center">
            <h2 className="text-3xl">OPU</h2>
            <p className="text-xl">Position : STRIKER</p>
            <h1 className="text-xl">Jarsi Number : 10</h1>
            
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure className="w-1/3">
            <img
            className="max-w-62"
              src="https://i.ibb.co.com/GvKS7c2g/Screenshot-2026-02-06-212038.png"
              alt="Movie"
            />
          </figure>
          <div className="text-center w-2/3 flex flex-col  space-y-3 justify-center">
            <h2 className="text-3xl">RASHED</h2>
            <p className="text-xl">Position : Defender</p>
            <h1 className="text-xl">Jarsi Number : 05</h1>
            
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default FeaturedPlayers;
