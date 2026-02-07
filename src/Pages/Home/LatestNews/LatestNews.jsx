import React from "react";

const LatestNews = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center mt-14 font-extrabold mb-6 text-red-500">
        Latest News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="w-[400px] h-[250px] object-cover"
              src="https://i.ibb.co.com/Jw5XDYZy/Screenshot-2026-02-07-065642.png"
              alt="Latest News Image 1"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-2xl font-bold">Man of The Match</h2>
            <p>
              Arman Hossin has been awarded the Man of the Match for his outstanding performance in the recent match against Ashir par  team. His exceptional skills and dedication on the field have earned him this prestigious recognition.
            </p>
            <div className="mt-4">
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
