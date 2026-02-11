import React from "react";

const Match = ({ score }) => {
  const { tournament, date, time, stadium, teamA, teamB } = score;

  return (
    <div className="container mx-auto py-20">
      

      <div className="">
        <div className="max-w-3xl mx-auto bg-[#151a1e] text-white rounded-2xl p-6 shadow-lg">
          <p className="text-sm text-gray-400 mb-4">
            {tournament} · {stadium}
          </p>

          <div className="flex items-center justify-between">
            {/* Team A */}
            <div className="flex items-center gap-3">
              <img src={teamA.flag} alt={teamA.name} className="w-8 h-6" />
              <p className="text-lg font-semibold">{teamA.name}</p>
            </div>

            {/* Score */}
            <div className="text-center">
              <p className="text-3xl font-bold">
                {teamA.score} - {teamB.score}
              </p>
              <p className="text-sm text-gray-400">Finished</p>
            </div>

            {/* Team B */}
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold">{teamB.name}</p>
              <img src={teamB.flag} alt={teamB.name} className="w-8 h-6" />
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 mt-4">
            📅 {date} · ⏰ {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
