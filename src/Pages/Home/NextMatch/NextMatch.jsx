import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../Components/Sheared/LoadingSpinner";

const NextMatch = () => {
  const [latestMatch, setLatestMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/nextmatch`)
      .then((res) => {
        const matches = res.data;

        // ✅ ensure it's an array
        if (Array.isArray(matches) && matches.length > 0) {
          const sortedMatches = [...matches].sort(
            (a, b) => new Date(b.date) - new Date(a.date),
          );

          setLatestMatch(sortedMatches[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching match data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner smallHeight={true} />;
  }

  if (!latestMatch) {
    return <p className="text-center mt-10">No match found</p>;
  }

  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-2xl text-center font-extrabold mb-6 text-red-500">
        NEXT MATCH
      </h1>

      <div className="bg-gray-900 text-white p-6 rounded-lg flex items-center justify-between">
        {/* Team A */}
        <div className="flex items-center gap-3">
          <img
            src={latestMatch.teamA.image}
            alt={latestMatch.teamA.name}
            className="w-12 h-12"
          />
          <h2 className="font-bold">{latestMatch.teamA.name}</h2>
        </div>

        {/* Match Info */}
        <div className="text-center">
          <p className="text-sm text-gray-400">{latestMatch.tournament}</p>
          <p className="font-semibold">
            {latestMatch.day}, {latestMatch.date}
          </p>
          <p className="text-red-400 font-bold">{latestMatch.time}</p>
        </div>

        {/* Team B */}
        <div className="flex items-center gap-3">
          <h2 className="font-bold">{latestMatch.teamB.name}</h2>
          <img
            src={latestMatch.teamB.image}
            alt={latestMatch.teamB.name}
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default NextMatch;
