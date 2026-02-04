import React from "react";

const LatestResult = () => {
  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-2xl text-center font-extrabold mb-6 text-red-500">
        Latest Results
      </h1>

      <div className="max-w-3xl mx-auto bg-[#151a1e] text-white rounded-2xl p-6 shadow-lg">
        {/* Competition */}
        <p className="text-sm text-gray-400 mb-4">
          Football · Asia · AFC Asian Cup Qualification Group C · Round 5
        </p>

        {/* Match Row */}
        <div className="flex items-center justify-between">
          {/* Bangladesh */}
          <div className="flex items-center gap-3">
            <img
              src="https://flagcdn.com/w40/bd.png"
              alt="Bangladesh"
              className="w-8 h-6 rounded-sm"
            />
            <p className="text-lg font-semibold">Bangladesh</p>
          </div>

          {/* Score */}
          <div className="text-center">
            <p className="text-3xl font-bold">1 - 0</p>
            <p className="text-sm text-gray-400">Finished</p>
          </div>

          {/* India */}
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">India</p>
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="India"
              className="w-8 h-6 rounded-sm"
            />
          </div>
        </div>

        {/* Goal Info */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Shekh Morsalin <span className="text-green-400">11'</span>
        </p>

        {/* Footer */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mt-5">
          <span>📅 18/11/2025 · 20:00</span>
          <span>🏆 AFC Asian Cup Qual.</span>
          <span>📺 T Sports</span>
        </div>
      </div>
    </div>
  );
};

export default LatestResult;