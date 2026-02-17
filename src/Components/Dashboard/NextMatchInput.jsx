import { useForm } from "react-hook-form";
import axios from "axios";

const NextMatchInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/matches", data);
      alert("Match data submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting match:", error);
      alert("Error submitting match data.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Match Name */}
        <div>
          <label htmlFor="matchName">Match Name:</label>
          <input
            id="matchName"
            {...register("matchName", { required: "Match name is required" })}
          />
          {errors.matchName && <p>{errors.matchName.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            type="time"
            {...register("time", { required: "Time is required" })}
          />
          {errors.time && <p>{errors.time.message}</p>}
        </div>

        {/* Team 1 */}
        <h3>Team 1</h3>
        <div>
          <label htmlFor="team1Name">Team Name:</label>
          <input
            id="team1Name"
            {...register("team1Name", { required: "Team 1 name is required" })}
          />
          {errors.team1Name && <p>{errors.team1Name.message}</p>}
        </div>
        <div>
          <label htmlFor="team1Flag">Team Flag (URL):</label>
          <input
            id="team1Flag"
            type="url"
            {...register("team1Flag", { required: "Team 1 flag is required" })}
          />
          {errors.team1Flag && <p>{errors.team1Flag.message}</p>}
        </div>

        {/* Team 2 */}
        <h3>Team 2</h3>
        <div>
          <label htmlFor="team2Name">Team Name:</label>
          <input
            id="team2Name"
            {...register("team2Name", { required: "Team 2 name is required" })}
          />
          {errors.team2Name && <p>{errors.team2Name.message}</p>}
        </div>
        <div>
          <label htmlFor="team2Flag">Team Flag (URL):</label>
          <input
            id="team2Flag"
            type="url"
            {...register("team2Flag", { required: "Team 2 flag is required" })}
          />
          {errors.team2Flag && <p>{errors.team2Flag.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit">Submit Match</button>
      </form>
    </div>
  );
};

export default NextMatchInput;
