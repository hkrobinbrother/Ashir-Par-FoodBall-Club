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

        if (Array.isArray(matches) && matches.length > 0) {
          // ✅ Sort by inserted time (_id) to get latest
          const sortedMatches = [...matches].sort(
            (a, b) => new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time)
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
   <div className="container mx-auto mt-14 px-4">
    <h1 className="text-2xl text-center font-extrabold mb-8 text-red-500 tracking-wide">
      NEXT MATCH
    </h1>

    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-between">

      {/* Team 1 */}
      <div className="flex items-center gap-4">
        <img
          src={latestMatch.team1Flag}
          alt={latestMatch.team1Name}
          className="w-14 h-14 object-cover rounded-full border-2 border-gray-700"
        />
        <h2 className="font-bold text-lg tracking-wide">
          {latestMatch.team1Name}
        </h2>
      </div>

      {/* Match Info */}
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-400 tracking-wide">
          {latestMatch.matchName}
        </p>

        <p className="font-semibold text-gray-300">
          {latestMatch.date}
        </p>

        <p className="text-red-400 text-xl font-bold">
          {new Date(`${latestMatch.date} ${latestMatch.time}`).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          })}
        </p>
      </div>

      {/* Team 2 */}
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-lg tracking-wide">
          {latestMatch.team2Name}
        </h2>
        <img
          src={latestMatch.team2Flag}
          alt={latestMatch.team2Name}
          className="w-14 h-14 object-cover rounded-full border-2 border-gray-700"
        />
      </div>

    </div>
  </div>
  );
};

export default NextMatch;
