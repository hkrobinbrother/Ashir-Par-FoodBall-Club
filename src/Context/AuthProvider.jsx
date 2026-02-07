import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);





  // ON AUTH STATE CHANGE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("currentUser --->", currentUser?.email);

      try {
        if (currentUser?.email) {
          setUser(currentUser);

          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/jwt`,
            { email: currentUser.email },
            { withCredentials: true },
          );
        } else {
          setUser(null);
          await axios.get(`${import.meta.env.VITE_BASE_URL}/logout`, {
            withCredentials: true,
          });
        }
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
