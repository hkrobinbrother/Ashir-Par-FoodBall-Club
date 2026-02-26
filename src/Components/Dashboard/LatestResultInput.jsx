import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { imagUpload } from "../../Api/utils";

const LatestResultInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setUploading(true);

      // 🔹 Get image files
      const team1ImageFile = data.team1Flag[0];
      const team2ImageFile = data.team2Flag[0];

      // 🔹 Upload images
      const team1ImageUrl = await imagUpload(team1ImageFile);
      const team2ImageUrl = await imagUpload(team2ImageFile);

      // 🔹 Prepare result data
      const resultData = {
        matchName: data.matchName,
        stadium: data.stadium,
        date: data.date,
        time: data.time,
        team1Name: data.team1Name,
        team1Flag: team1ImageUrl,
        team1Score: Number(data.team1Score),
        team2Name: data.team2Name,
        team2Flag: team2ImageUrl,
        team2Score: Number(data.team2Score),
        createdAt: new Date(),
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/scores`,
        resultData,
        { withCredentials: true }
      );

      toast.success("Latest result submitted successfully!");
      console.log(response.data);
      reset();

    } catch (error) {
      toast.error("Result not submitting.");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Latest Result Update
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Match Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              placeholder="Match Name"
              {...register("matchName", { required: true })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />

            <input
              placeholder="Stadium / League"
              {...register("stadium", { required: true })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />

            <input
              type="date"
              {...register("date", { required: true })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />

            <input
              type="time"
              {...register("time", { required: true })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />

          </div>

          {/* Team 1 */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              Team 1
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <input
                placeholder="Team 1 Name"
                {...register("team1Name", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="file"
                accept="image/*"
                {...register("team1Flag", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="number"
                placeholder="Score"
                {...register("team1Score", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

            </div>
          </div>

          {/* Team 2 */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              Team 2
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <input
                placeholder="Team 2 Name"
                {...register("team2Name", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="file"
                accept="image/*"
                {...register("team2Flag", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="number"
                placeholder="Score"
                {...register("team2Score", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

            </div>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`w-full text-white font-medium rounded-lg text-sm px-5 py-3 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {uploading ? "Uploading..." : "Submit Result"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default LatestResultInput;