import axios from "axios";
import { useEffect, useState } from "react";
import AllPlayers from "../../Components/Common/Players/AllPlayers";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/players")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold text-center">All Player List </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {players.map((player) => (
            <AllPlayers key={player._id} player={player}></AllPlayers>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
