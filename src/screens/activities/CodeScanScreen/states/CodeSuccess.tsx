import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LottieView from "lottie-react-native";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo"; // TODO: make touchable info reusable component
import Divider from "../../../../components/common/Divider";
import Card from "../../../../components/common/Card";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import JOIN_CONFIRMATION from "../../../../api/placeholders/JOIN_CONFIRMATION";
import getHour from "../../../../utils/date/getHour";
import ActivityData from "../componentss/ActivityData";
import Admin from "../componentss/Admin";
import Actions from "../componentss/Actions";
import JoinAnimation from "../componentss/JoinAnimation";

interface Props {
  data: any;
}

const CodeSuccess = ({ data }: Props) => {
  const { gid, admin, name, description, duration, startDate } = data;

  const hour = getHour(startDate);

  return (
    <View style={styles.container}>
      <Card border={false}>
        <Text style={styles.title}>¡Participación confirmada!</Text>
        <Divider height={32} />
        <Admin admin={admin} />
        <Divider height={20} />
        <ActivityData
          duration={duration}
          hour={hour}
          description={description}
        />
        <Actions activityGid={gid} />
      </Card>
      <JoinAnimation />
    </View>
  );
};

export default CodeSuccess;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingTop: 22,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  playerContainer: {
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.grey,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  column: {
    flex: 1,
    paddingLeft: 20,
    borderWidth: 1,
  },
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 16,
    textAlign: "left",
  },
});