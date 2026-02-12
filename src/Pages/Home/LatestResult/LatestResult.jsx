import { useContext } from "react";


import Match from "../../../Components/Common/Match/Match";
import { MatchesContext } from "../../../Context/Matches";

const LatestResult = () => {
  const { scores, loading } = useContext(MatchesContext);

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  // Get the latest match
  const score = [...scores].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];

  if (!score) return <p className="text-center mt-6">No matches found</p>;

  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-2xl text-center font-extrabold mb-6 text-red-500">
        Latest Result
      </h1>

      {/* Render only latest match */}
     {
      score && <Match score={score} />
     }
    </div>
  );
};

export default LatestResult;
