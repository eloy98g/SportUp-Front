import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextArea as RNTextArea } from "tamagui";
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  placeholder?: string;
  value: any;
  onChange: any;
  error?: boolean;
}
const TextArea = ({ placeholder, value, onChange, error = false }: Props) => {
  const borderColor = error ? colors.red : colors.grey;

  return (
    <RNTextArea
      style={[styles.container, { borderColor }]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 92,
    borderRadius: 10,
    fontFamily: family.normal,
    borderWidth: 1,
    fontSize: 18,
    textAlign: "left",
    color: colors.black,
    backgroundColor: colors.white,
  },
});