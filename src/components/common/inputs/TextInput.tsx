import React from "react";
import { TextInput as Input, StyleSheet } from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  onChange: (T: any) => void;
  value: string;
  placeholder?: string;
  error?: boolean;
  secure?: boolean;
  numeric?: boolean;
}

const TextInput = ({
  onChange,
  numeric,
  value,
  placeholder,
  error,
  secure,
}: Props) => {
  const borderColor = error ? colors.red : colors.grey;
  return (
    <Input
      keyboardType={numeric ? "numeric" : "default"}
      style={[styles.input, { borderColor }]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      secureTextEntry={secure}
    />
  );
};

TextInput.defaultProps = {
  placeholder: "",
  error: false,
  secure: false,
  numeric: false,
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 46,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderRadius: 10,
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
    textAlign: "left",
  },
});
