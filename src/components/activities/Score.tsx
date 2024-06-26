import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import PartialScore from "./PartialScore";
import FinalScore from "./FinalScore";

// Types
import Result from "../../store/types/activity/Result";
import ScoreT from "../../store/types/activity/Score";

interface Props {
  result: Result;
}

const Score = ({ result }: Props) => {
  const { partialScores, finalScores } = result;
  return (
    <View style={styles.scoreWrapper}>
      {partialScores.map((score: ScoreT) => (
        <PartialScore key={score.slot} data={score} />
      ))}
      {finalScores.map((score: ScoreT) => (
        <FinalScore key={score.slot} data={score} />
      ))}
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  scoreWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
