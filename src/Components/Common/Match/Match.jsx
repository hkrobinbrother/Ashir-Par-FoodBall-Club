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
    <div className="w-full px-4 py-10">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1f2937] text-white rounded-2xl p-6 sm:p-8 shadow-2xl">

        {/* Match Info */}
        <p className="text-xs sm:text-sm text-gray-400 mb-6 text-center lg:text-left">
          {matchName} · {stadium}
        </p>

        {/* Teams & Score */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Team 1 */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <img
              src={team1Flag}
              alt={team1Name}
              className="w-10 h-8 sm:w-12 sm:h-10 object-cover rounded"
            />
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              {team1Name}
            </p>
          </div>

          {/* Score Section */}
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              {team1Score} - {team2Score}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Finished
            </p>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
            <p className="text-base sm:text-lg md:text-xl font-semibold order-2 sm:order-1">
              {team2Name}
            </p>
            <img
              src={team2Flag}
              alt={team2Name}
              className="w-10 h-8 sm:w-12 sm:h-10 object-cover rounded order-1 sm:order-2"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="text-center text-xs sm:text-sm text-gray-400 mt-6">
          📅 {date} · ⏰ {time}
        </div>
       

      </div>
    </div>
  );
};

export default Match;