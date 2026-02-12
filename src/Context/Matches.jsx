import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Create context
export const MatchesContext = createContext();

// 2. Create provider
export const MatchesProvider = ({ children }) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/scores`)
      .then((res) => {
        setScores(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching matches:", err);
        setLoading(false);
      });
  }, []);

  // 3. You can also add helper to get latest match


  return (
    <MatchesContext.Provider value={{ scores, loading }}>
      {children}
    </MatchesContext.Provider>
  );
};
