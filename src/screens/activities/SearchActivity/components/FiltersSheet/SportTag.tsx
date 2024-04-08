import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  image: string;
  name: string;
  onPress: () => void;
  selected: boolean;
}

const SportTag = ({ image, name, onPress, selected }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={[styles.container, selected && styles.selected]}
        source={{ uri: image }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.opacity} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportTag;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 90,
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 6,
    zIndex: 3,
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  title: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.white,
  },
  opacity: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.3,
  },
});
