import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../../Components/Sheared/LoadingSpinner";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setDbUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  if (!dbUser) return <LoadingSpinner/>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <img
          src={dbUser.photoURL || "https://i.ibb.co.com/pjvgNqkh/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
          
        />

        <h2 className="text-xl font-bold">{dbUser.name}</h2>
        <p className="text-gray-600">{dbUser.email}</p>

        <span className="inline-block mt-3 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Role: {dbUser.role}
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
