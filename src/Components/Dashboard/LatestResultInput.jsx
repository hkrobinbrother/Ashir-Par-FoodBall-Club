import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const LatestResultInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/scores`,
        data,
        { withCredentials: true }
      );

      toast.success("Latest result submitted successfully!");
      console.log(response.data);
    } catch (error) {
      toast.error("Result not submitting.");
      console.error(error);
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

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Match Name
              </label>
              <input
                {...register("matchName", { required: "Match name is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.matchName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.matchName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Stadium / League
              </label>
              <input

                {...register("stadium", { required: "Stadium is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.stadium && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stadium.message}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
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
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
              Team 1
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Team Name
                </label>
                <input
                  {...register("team1Name", { required: "Team 1 name is required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Team Flag URL
                </label>
                <input
                  type="url"
                  {...register("team1Flag", { required: "Team 1 flag is required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Score
                </label>
                <input
                  type="number"
                  {...register("team1Score", { required: "Score required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

            </div>
          </div>

          {/* Team 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
              Team 2
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Team Name
                </label>
                <input
                  {...register("team2Name", { required: "Team 2 name is required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Team Flag URL
                </label>
                <input
                  type="url"
                  {...register("team2Flag", { required: "Team 2 flag is required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Score
                </label>
                <input
                  type="number"
                  {...register("team2Score", { required: "Score required" })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
              </div>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm px-5 py-3 transition duration-300"
          >
            Submit Result
          </button>

        </form>
      </div>
    </div>
  );
};

export default LatestResultInput;
