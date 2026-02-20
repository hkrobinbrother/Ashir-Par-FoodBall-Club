

const Dashboard = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/d44R0h8d/pexels-pixabay-46798.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Ashir Par Football Club</h1>
      <p className="mb-5">
        Welcome to the Ashir Par Football Club Dashboard! Here you can manage your team, view player stats, and stay updated with the latest news. Whether you're a coach, player, or fan, this is your hub for all things Ashir Par FC. Let's kick off the season with passion and teamwork!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Dashboard;