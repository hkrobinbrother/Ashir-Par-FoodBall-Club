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
          const sortedMatches = [...matches].sort(
            (a, b) =>
              new Date(b.date + " " + b.time) -
              new Date(a.date + " " + a.time)
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
    return (
      <p className="text-center mt-10 text-gray-400">
        No match found
      </p>
    );
  }

  return (
    <div className="w-full px-4 py-14">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold mb-10 text-red-500 tracking-widest">
          NEXT MATCH
        </h1>

        {/* Match Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Team 1 */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <img
                src={latestMatch.team1Flag}
                alt={latestMatch.team1Name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-gray-600"
              />
              <h2 className="font-bold text-lg sm:text-xl tracking-wide text-center md:text-left">
                {latestMatch.team1Name}
              </h2>
            </div>

            {/* Match Info Center */}
            <div className="text-center space-y-2">
              <p className="text-xs sm:text-sm text-gray-400 tracking-wide">
                {latestMatch.matchName}
              </p>

              <p className="text-sm sm:text-base font-medium text-gray-300">
                📅 {latestMatch.date}
              </p>

              <p className="text-red-400 text-2xl sm:text-3xl font-extrabold">
                {new Date(
                  `${latestMatch.date} ${latestMatch.time}`
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <img
                src={latestMatch.team2Flag}
                alt={latestMatch.team2Name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-gray-600"
              />
              <h2 className="font-bold text-lg sm:text-xl tracking-wide text-center md:text-right">
                {latestMatch.team2Name}
              </h2>
            </div>

          </div>
        </div>
                
      </div>
    </div>
  );
};

export default NextMatch;