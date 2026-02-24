import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const FanMessageForClub = () => {
       const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/news?category=club`)
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-green-800">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
        📰 Fan's Message For The Club
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-white/10 backdrop-blur-md border border-green-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 text-white">
                <h2 className="text-xl font-bold text-green-400 mb-2">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-300">
                  {item.description.slice(0, 120)}...
                </p>

                <Link to="/workingStage">
                <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanMessageForClub;
