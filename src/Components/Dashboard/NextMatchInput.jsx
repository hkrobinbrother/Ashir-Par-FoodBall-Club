import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const NextMatchInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/nextmatch`, data,
      {
        withCredentials: true, 
      });
      toast.success("Match data submitted successfully!");
      console.log(response.data);
    } catch (error) {
      toast.error("Match data not submitting .");
      console.error("Error submitting match:", error);
    }
  };

 return (
  <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Match Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label htmlFor="matchName" className="block mb-2 text-sm font-medium text-gray-700">
              Match Name
            </label>
            <input
              id="matchName"
              {...register("matchName", { required: "Match name is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
            />
            {errors.matchName && <p className="text-red-500 text-sm mt-1">{errors.matchName.message}</p>}
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              id="date"
              type="date"
              {...register("date", { required: "Date is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              id="time"
              type="time"
              {...register("time", { required: "Time is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
          </div>

        </div>

        {/* Team 1 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Team 1
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="team1Name" className="block mb-2 text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input
                id="team1Name"
                {...register("team1Name", { required: "Team 1 name is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.team1Name && <p className="text-red-500 text-sm mt-1">{errors.team1Name.message}</p>}
            </div>

            <div>
              <label htmlFor="team1Flag" className="block mb-2 text-sm font-medium text-gray-700">
                Team Flag (URL)
              </label>
              <input
                id="team1Flag"
                type="url"
                {...register("team1Flag", { required: "Team 1 flag is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.team1Flag && <p className="text-red-500 text-sm mt-1">{errors.team1Flag.message}</p>}
            </div>
          </div>
        </div>

        {/* Team 2 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Team 2
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="team2Name" className="block mb-2 text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input
                id="team2Name"
                {...register("team2Name", { required: "Team 2 name is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.team2Name && <p className="text-red-500 text-sm mt-1">{errors.team2Name.message}</p>}
            </div>

            <div>
              <label htmlFor="team2Flag" className="block mb-2 text-sm font-medium text-gray-700">
                Team Flag (URL)
              </label>
              <input
                id="team2Flag"
                type="url"
                {...register("team2Flag", { required: "Team 2 flag is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
              {errors.team2Flag && <p className="text-red-500 text-sm mt-1">{errors.team2Flag.message}</p>}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm px-5 py-3 transition duration-300"
        >
          Submit Match
        </button>

      </form>
    </div>
  </div>
);


};

export default NextMatchInput;
