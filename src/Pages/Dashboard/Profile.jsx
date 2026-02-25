import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../../Components/Sheared/LoadingSpinner";

const Profile = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      setDataLoading(false);
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/${user.email}`)
      .then((res) => {
        setDbUser(res.data);
      })
      .catch((err) => {
        console.log("DB fetch error:", err);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [user]);

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  // 🔹 Show spinner only while firebase loading
  if (loading) {
    return <LoadingSpinner />;
  }

  // 🔹 If user not logged in (extra safety)
  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500">
        No user found. Please login.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">

        <img
          src={
            dbUser?.photoURL ||
            user?.photoURL ||
            "https://i.ibb.co/pjvgNqkh/default-avatar.png"
          }
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />

        <h2 className="text-xl font-bold">
          {dbUser?.name || user?.displayName || "No Name"}
        </h2>

        <p className="text-gray-600">
          {dbUser?.email || user?.email}
        </p>

        <span className="inline-block mt-3 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Role: {dbUser?.role || "user"}
        </span>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;