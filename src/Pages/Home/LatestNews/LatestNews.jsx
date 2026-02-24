import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/news?category=news`)
      .then((res) => {
        const sortedNews = [...res.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3); // 🔥 Only 3

        setNews(sortedNews);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto py-20 px-4 ">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        📰 Latest News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
      <Link to="/news">
        <button className="btn bg-amber-300">See More News</button>
      </Link>
      </div>
    </div>
  );
};

export default LatestNews;