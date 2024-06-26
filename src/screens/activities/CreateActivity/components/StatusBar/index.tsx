import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Progress } from "tamagui";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  value?: number;
  max?: number;
  position?: number;
}

const StatusBar = ({ value, max, position }: Props) => {
  return (
    <View>
      <Text style={styles.text}>
        {position} / {max}
      </Text>
      <Progress
        size={2}
        value={value || 0}
        unstyled
        style={styles.progressContainer}
      >
        <Progress.Indicator
          animation="lazy"
          unstyled
          style={[
            styles.progress,
            value === 100 && {
              backgroundColor: colors.secondary,
              borderColor: colors.secondary,
            },
          ]}
        />
      </Progress>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  progressContainer: {
    width: "100%",
    height: 10,
    borderRadius: 30,
    backgroundColor: colors.lightenGrey,
    overflow: "hidden",
  },
  progress: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.grey,
    textAlign: "right",
    paddingRight: 4,
  },
});
