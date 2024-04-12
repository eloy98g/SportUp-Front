import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";
import Modal from "../../../../components/common/Modal";

// Hooks
import { STATUS } from "../../../../hooks/useStatus";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  visible: boolean;
  setVisible: (T: any) => void;
  onFinish: () => void;
}

const ConfirmDeletePlayersModal = ({
  visible,
  setVisible,
  onFinish,
}: Props) => {
  const acceptHandler = () => {
    onFinish();
  };

  const cancelHandler = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Eliminar jugadores</Text>
        <Divider height={16} />
        <Text style={styles.subtitle}>
          {`Estás a punto de eliminar a los jugadores seleccionados de esta actividad.\nLa acción será efectiva cuando guardes los cambios\n¿Estás seguro?`}
        </Text>
        <Divider height={16} />
        <View style={styles.row}>
          <MainButton
            title="Cancelar"
            onPress={cancelHandler}
            textColor={colors.primary}
            color={colors.white}
          />
          <Divider width={20} />
          <MainButton
            title="Eliminar"
            onPress={acceptHandler}
            borderColor={colors.red}
            color={colors.red}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeletePlayersModal;

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
