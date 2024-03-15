import getStreakVictory from "./getStreakVictory";

// TODO: remove any's
const getStats = (activities = []) => {
  let victories = 0;
  let ties = 0;
  let loses = 0;

  activities.map((item: any) => {
    switch (item.result.result) {
      case "victory":
        victories++;
        break;
      case "defeat":
        loses++;
        break;
      case "tie":
        ties++;
        break;
    }
  });
  const sortedArray = activities.sort(
    (a: any, b: any) => a.startDate - b.startDate
  );
  const lastActivityDate =
    sortedArray[sortedArray.length - 1]?.startDate || false;

  const victoryStreak = getStreakVictory(activities);

  const total = victories + loses + ties;
  const percentage =
    total === 0 ? 0 : Math.round((victories / total) * 100).toFixed(0);

  return {
    victories,
    ties,
    loses,
    total,
    percentage,
    victoryStreak,
    lastActivityDate,
  };
};

export default getStats;
