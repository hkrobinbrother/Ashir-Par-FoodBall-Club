import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { imagUpload } from "../../Api/utils";


const PlayerInput = () => {
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

      // 🔹 Get selected image file
      const imageFile = data.image[0];

      // 🔹 Upload to ImageBB and get URL
      const imageUrl = await imagUpload(imageFile);

      // 🔹 Prepare player data for backend
      const playerData = {
        name: data.name,
        role: data.role,
        image: imageUrl,
      };

      // 🔹 Send to backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/players`,
        playerData,
        { withCredentials: true }
      );

      toast.success("Player added successfully!");
      console.log(response.data);

      reset();
    } catch (error) {
      console.error("Error adding player:", error);
      toast.error("Failed to add player.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Player
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Player Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Player Name
            </label>
            <input
              {...register("name", { required: "Player name is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Player Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Player Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              {...register("role", { required: "Role is required" })}
              className="bg-gray-50 border border-gray-300 rounded-lg w-full p-3"
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className={`w-full text-white font-medium rounded-lg text-sm px-5 py-3 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {uploading ? "Uploading..." : "Add Player"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerInput;