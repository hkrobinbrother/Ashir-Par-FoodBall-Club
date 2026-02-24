import React, { useContext } from "react";
import Match from "../../Components/Common/Match/Match";
import { MatchesContext } from "../../Context/Matches";

const Matches = () => {
  const { scores, loading } = useContext(MatchesContext);

  if (loading)
    return <p className="text-center mt-6 text-white">Loading...</p>;

  // 🔥 Sort by latest date first
  const sortedScores = [...scores].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-800">
      <div className="mx-auto max-w-4xl py-18">
        <h1 className="text-3xl font-bold text-white text-center">
          This is All Matches List
        </h1>
      </div>

      {/* Latest match will be first */}
      {sortedScores.map((score, index) => (
        <Match key={index} score={score} />
      ))}
    </div>
  );
};

export default Matches;