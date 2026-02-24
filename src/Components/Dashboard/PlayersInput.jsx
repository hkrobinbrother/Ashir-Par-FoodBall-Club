import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const PlayerInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/players`,
        data,
        { withCredentials: true } // Send cookie for JWT auth
      );
      toast.success("Player added successfully!");
      reset();
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to add player.");
      console.error("Error adding player:", error);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Player
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Player Name
            </label>
            <input
              {...register("name", { required: "Player name is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Player Image (URL)
            </label>
            <input
              type="url"
              {...register("image", { required: "Image URL is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              {...register("role", { required: "Role is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm px-5 py-3"
          >
            Add Player
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerInput;