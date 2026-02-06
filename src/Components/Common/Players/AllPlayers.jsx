
const AllPlayers = ({ player }) => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="w-80 mx-auto">
          {/* Card */}
          <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
            <figure>
              <img
              
                src={player.image}
                alt="Player"
                className="w-full h-96 object-cover"
              />
            </figure>
          </div>

          {/* Text section */}
          <div className="text-center mt-4">
            <h1 className="text-lg font-bold uppercase">{player.name}</h1>
            <p className="text-gray-500">{player.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlayers;
