const Players = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold text-center">All Player List </h1>
        <div className="grid-cols-1 md:grid-cols-3 grid gap-4 mt-8">
          <div className="w-80 mx-auto">
            {/* Card */}
            <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
              <figure>
                <img
                  src="https://i.ibb.co.com/Gv3TwW9c/pexels-omar-ramadan-1739260-26630669.jpg"
                  alt="Player"
                  className="w-full h-96 object-cover"
                />
              </figure>
            </div>

            {/* Text section */}
            <div className="text-center mt-4">
              <h1 className="text-lg font-bold uppercase">Benjamin Carter</h1>
              <p className="text-gray-500">Head Coach</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Players;
