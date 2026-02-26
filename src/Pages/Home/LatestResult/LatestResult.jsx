import { useContext, useMemo } from "react";
import Match from "../../../Components/Common/Match/Match";
import { MatchesContext } from "../../../Context/Matches";
import LoadingSpinner from "../../../Components/Sheared/LoadingSpinner";

const LatestResult = () => {
  const { scores, loading } = useContext(MatchesContext);

  // Memoized latest match (performance friendly)
  const latestMatch = useMemo(() => {
    if (!scores || scores.length === 0) return null;

    return scores.reduce((latest, current) => {
      return new Date(current.date) > new Date(latest.date)
        ? current
        : latest;
    });
  }, [scores]);

  if (loading) return <LoadingSpinner />;

  if (!latestMatch)
    return <p className="text-center mt-6">No matches found</p>;

  return (
    <div className="text-sm px-2 md:container mx-auto mt-14">
      <h1 className="text-2xl text-center font-extrabold mb-6 text-red-500 md:text-3xl">
        Latest Result
      </h1>

      <Match score={latestMatch} />
    </div>
  );
};

export default LatestResult;