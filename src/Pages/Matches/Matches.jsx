import React, { useContext } from "react";
import Match from "../../Components/Common/Match/Match";
import { MatchesContext } from "../../Context/Matches";

const Matches = () => {
  const { scores, loading } = useContext(MatchesContext);

  if (loading)
    return <p className="text-center mt-6">Loading...</p>;

  // Sort matches by date (latest first)
  const sortedScores = [...scores].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl py-18">
        <h1 className="text-3xl font-bold text-center">
          This is All Matches List
        </h1>
      </div>

      {/* Render sorted matches */}
      {sortedScores.map((score, index) => (
        <Match key={index} score={score} />
      ))}
    </div>
  );
};

export default Matches;
