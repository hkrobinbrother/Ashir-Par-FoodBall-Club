
import React, { useEffect, useState } from "react";
import Match from "../../Components/Common/Match/Match";
import axios from "axios";

const Matches = () => {
    const [scores, setScores] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/scores`)
      .then((response) => {
        setScores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scores:", error);
      });
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl py-18">
        <h1 className="text-3xl font-bold text-center ">
        This is All Matches List
      </h1>
      </div>
     {scores.map((score, index) => <Match key={index} score={score} />)}
    </div>
  );
};

export default Matches;
