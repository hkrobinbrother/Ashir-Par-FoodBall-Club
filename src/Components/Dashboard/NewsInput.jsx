import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const NewsInput = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/news`,
        data
      );
      if (res.data.insertedId) {
        toast.success("News Added Successfully ⚽");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-black to-green-800 p-6">

      <div className="w-full max-w-2xl bg-black/60 backdrop-blur-lg border border-green-500/30 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-green-400 mb-6 tracking-wide">
          ⚽ Add Football News
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Title */}
          <div>
            <label className="text-green-300 text-sm">News Title</label>
            <input
              {...register("title", { required: true })}
              placeholder="Enter News Title"
              className="w-full mt-1 p-3 bg-gray-900 border border-green-500/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-green-300 text-sm">Category ( About )</label>
            <select
              {...register("category")}
              className="w-full mt-1 p-3 bg-gray-900 border border-green-500/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              <option value="club">Club</option>
              <option value="match">Match</option>
              <option value="news">News</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="text-green-300 text-sm">Image URL</label>
            <input
              {...register("image")}
              placeholder="Paste Image URL"
              className="w-full mt-1 p-3 bg-gray-900 border border-green-500/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-green-300 text-sm">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Write full news description..."
              rows="5"
              className="w-full mt-1 p-3 bg-gray-900 border border-green-500/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transform transition duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            🚀 Publish News
          </button>

        </form>
      </div>
    </div>
  );
};

export default NewsInput;