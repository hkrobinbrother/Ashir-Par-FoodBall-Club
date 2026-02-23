import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🔹 Email Login
  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);

      toast.success("Login Successful ✅");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
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

    // This will:
    // 👉 Insert if new
    // 👉 Ignore if already exists
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users`,
      userData,
      { withCredentials: true }
    );

    toast.success("Login Successful ✅");

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
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
              className="w-full px-4 py-2 border rounded-lg"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-lg transition"
          >
            Login
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
            If You Don't Have An Account, Please Register
          </h1>
          <Link
            to="/register"
            className="text-center mt-2 text-blue-500 hover:underline block"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;