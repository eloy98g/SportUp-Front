import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../common/buttons/MainButton";
import Divider from "../common/Divider";
import Modal from "../common/Modal";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  visible: boolean;
  setVisible: (T: any) => void;
  error: string;
}

const ErrorModal = ({ visible, setVisible, error }: Props) => {
  const acceptHandler = () => {
    setVisible(false);
  };
  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Divider height={16} />
        <Text style={styles.subtitle}>{error}</Text>
        <Divider height={16} />
        <View style={styles.row}>
          <MainButton title="Aceptar" onPress={acceptHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 16,
  },
});