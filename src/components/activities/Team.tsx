import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  image: string | undefined;
  size: number ;
}

const Team = ({ image, size }: Props) => {
  const teamText = size > 1 ? "+" + (size - 1) : "";
  return (
    <View style={styles.image}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{teamText}</Text>
    </View>
  );
};

Team.defaultProps = {
  size: 1,
};

export default Team;

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 18,
    resizeMode: "cover",
  },
  text: {
    fontFamily: family.semibold,
    fontSize: 12,
    color: colors.grey,
    position: "absolute",
    bottom: -10,
    right: -10,
  },
});
