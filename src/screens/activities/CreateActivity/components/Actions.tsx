import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  leftAction: () => void;
  rightAction: () => void;
  leftTitle: string;
  rightTitle: string;
}

const Actions = ({
  leftAction,
  rightAction,
  leftTitle = "",
  rightTitle = "",
}: Props) => {
  return (
    <View style={styles.container}>
      <MainButton
        title={leftTitle}
        onPress={leftAction}
        color={colors.white}
        textColor={colors.primary}
      />
      <Divider width={20} />
      <MainButton title={rightTitle} onPress={rightAction} />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 12,
  },
});
