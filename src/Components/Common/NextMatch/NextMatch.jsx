import React from "react";

const NextMatch = () => {
  return (
    <div>
      <div className="container mx-auto mt-14">
        <h1 className="text-2xl text-center font-extrabold mb-6 text-red-500">
          NEXT MATCH
        </h1>
        <div>
          <div className="max-w-4xl mx-auto bg-[#151a1e] text-white rounded-2xl px-6 py-4 shadow-lg">
            {/* Top Row */}
            <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
              <p>Tue, Mar 31</p>
              <p className="flex items-center gap-1">
                Asian Cup Qualification Playoff
                <span className="text-red-500">🎯</span>
              </p>
            </div>

            {/* Match Row */}
            <div className="flex items-center justify-between">
              {/* Singapore */}
              <div className="flex items-center gap-3">
                <p className="font-semibold">Singapore</p>
                <img
                  src="https://flagcdn.com/w40/sg.png"
                  alt="Singapore"
                  className="w-8 h-6 rounded-sm"
                />
              </div>

              {/* Time */}
              <div className="text-center">
                <p className="text-xl font-bold">4:00</p>
                <p className="text-xs text-gray-400">PM</p>
              </div>

              {/* Bangladesh */}
              <div className="flex items-center gap-3">
                <img
                  src="https://flagcdn.com/w40/bd.png"
                  alt="Bangladesh"
                  className="w-8 h-6 rounded-sm"
                />
                <p className="font-semibold">Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMatch;
