import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { imagUpload } from "../../Api/utils";

const NextMatchInput = () => {
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

      // 🔹 Upload images to imageBB
      const team1ImageUrl = await imagUpload(team1ImageFile);
      const team2ImageUrl = await imagUpload(team2ImageFile);

      // 🔹 Prepare match data
      const matchData = {
        matchName: data.matchName,
        date: data.date,
        time: data.time,
        team1Name: data.team1Name,
        team1Flag: team1ImageUrl,
        team2Name: data.team2Name,
        team2Flag: team2ImageUrl,
      };

      // 🔹 Send to backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/nextmatch`,
        matchData,
        { withCredentials: true }
      );

      toast.success("Match data submitted successfully!");
      console.log(response.data);
      reset();
    } catch (error) {
      console.error("Error submitting match:", error);
      toast.error("Match data not submitting.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Next Match Input
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Match Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Match Name
              </label>
              <input
                {...register("matchName", { required: "Match name is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />
              {errors.matchName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.matchName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                {...register("time", { required: "Time is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>

          </div>

          {/* Team 1 */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              Team 1
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="Team 1 Name"
                {...register("team1Name", { required: "Team 1 name is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="file"
                accept="image/*"
                {...register("team1Flag", { required: "Team 1 flag is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />
            </div>
          </div>

          {/* Team 2 */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              Team 2
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="Team 2 Name"
                {...register("team2Name", { required: "Team 2 name is required" })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
              />

              <input
                type="file"
                accept="image/*"
                {...register("team2Flag", { required: "Team 2 flag is required" })}
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
            {uploading ? "Uploading..." : "Submit Match"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default NextMatchInput;