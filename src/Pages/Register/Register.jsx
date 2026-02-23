import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🔹 Email Register
  const onSubmit = async (data) => {
    const { name, email, password, photoURL } = data;

    try {
      // 1️⃣ Create Firebase User
      await createUser(email, password);

      // 2️⃣ Update profile
      await updateUserProfile(name, photoURL);

      // 3️⃣ Save user to backend DB
      const userData = {
        name,
        email,
        photoURL: photoURL || "",
        role: "user",
      };

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users`,
        userData,
        { withCredentials: true }
      );

      toast.success("Account Created Successfully ✅");

      // Redirect to Home (better than login)
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL || "",
        role: "user",
      };

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users`,
        userData,
        { withCredentials: true }
      );

      toast.success("Google Login Successful ✅");

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Photo URL (optional)
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg"
              {...register("photoURL")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-lg mt-2 transition"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Continue with Google
          </button>

        </form>

        <div>
          <h1 className="text-center mt-4 text-red-500">
            If You Already Have An Account, Please Login
          </h1>
          <Link
            to="/login"
            className="text-center mt-2 text-blue-500 hover:underline block"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;