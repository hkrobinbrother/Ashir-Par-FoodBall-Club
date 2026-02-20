import React from "react";

const Match = ({ score }) => {
  const {
    matchName,
    stadium,
    date,
    time,
    team1Name,
    team1Flag,
    team1Score,
    team2Name,
    team2Flag,
    team2Score,
  } = score;

  return (
    <div className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto bg-[#151a1e] text-white rounded-2xl p-6 shadow-lg">
        
        <p className="text-sm text-gray-400 mb-4">
          {matchName} · {stadium}
        </p>

        <div className="flex items-center justify-between">
          {/* Team 1 */}
          <div className="flex items-center gap-3">
            <img src={team1Flag} alt={team1Name} className="w-8 h-6" />
            <p className="text-lg font-semibold">{team1Name}</p>
          </div>

          {/* Score */}
          <div className="text-center">
            <p className="text-3xl font-bold">
              {team1Score} - {team2Score}
            </p>
            <p className="text-sm text-gray-400">Finished</p>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">{team2Name}</p>
            <img src={team2Flag} alt={team2Name} className="w-8 h-6" />
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-4">
          📅 {date} · ⏰ {time}
        </div>
      </div>
    </div>
  );
};

export default Match;
