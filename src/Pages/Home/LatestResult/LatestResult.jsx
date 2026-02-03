import React from "react";

const LatestResult = () => {
  return (
    <div>
      <div className="scoreboard">
        <h2>NFC Divisional</h2>
        <div className="teams">
          <div className="team">
            <h3>Bears</h3>
            <p className="score">17</p>
          </div>
          <div className="team">
            <h3>Rams</h3>
            <p className="score">20</p>
          </div>
        </div>
        <div className="footer">
          <p>FT</p>
          <p>Mon, 19 Jan</p>
        </div>
      </div>
    </div>
  );
};

export default LatestResult;
