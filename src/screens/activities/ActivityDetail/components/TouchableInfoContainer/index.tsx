import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import AccessInfo from "../../../../../components/tutorial/AccessInfo";
import RankedInfo from "../../../../../components/tutorial/RankedInfo";
import Divider from "../../../../../components/common/Divider";
import Icon from "../../../../../components/common/Icon";
import TouchableInfo from "./TouchableInfo";
import InfoSheet from "./InfoSheet";

// Theme
import colors from "../../../../../theme/colors";

// Types
import Activity from "../../../../../store/types/Activity";

interface Props {
  data: Activity;
}

const TouchableInfoContainer = ({ data }: Props) => {
  const [sheet, setSheet] = useState<string | boolean>("");
  const { access, type } = data;

  const accessHandler = () => setSheet("Access");

  const typeHandler = () => setSheet("Ranked");

  const accessText =
    access === "public" ? "Actividad pública" : "Actividad privada";

  const typeText =
    type === "normal"
      ? "Esta partida no influirá a tu nivel"
      : "Las partidas competitivas influyen en tu nivel";

  return (
    <View style={styles.container}>
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
      <Divider height={18} />
      <TouchableInfo
        icon={<Icon icon={type} size={24} color={colors.black} />}
        title={typeText}
        onPress={typeHandler}
      />
      <InfoSheet open={sheet === "Access"} setOpen={setSheet}>
        <AccessInfo />
      </InfoSheet>
      <InfoSheet open={sheet === "Ranked"} setOpen={setSheet}>
        <RankedInfo />
      </InfoSheet>
    </View>
  );
};

export default TouchableInfoContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
