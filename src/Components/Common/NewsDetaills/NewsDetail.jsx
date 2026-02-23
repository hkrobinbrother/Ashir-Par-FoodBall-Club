import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

const NewsDetail = () => {
  const { id } = useParams(); // get the ID from URL
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/news/${id}`)
      .then((res) => setNewsItem(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!newsItem) {
    return (
      <div className="text-center text-white mt-20">
        Loading news...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-green-800 px-4 py-20">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-green-500/30 rounded-xl p-8 shadow-lg text-white">
        <h1 className="text-3xl font-bold text-green-400 mb-6">
          {newsItem.title}
        </h1>

        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-300 leading-relaxed">
          {newsItem.description}
        </p>


        <Link to="/news">
          <button className="mt-6 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg">
            ← Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;