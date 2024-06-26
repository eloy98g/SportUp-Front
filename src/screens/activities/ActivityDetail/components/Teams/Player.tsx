import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CircleFadingPlus } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import ActionSheet from "../ActionSheet";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import PlayerT from "../../../../../store/types/activity/Player";
import Activity from "../../../../../store/types/activity/Activity";

interface Props {
  data: PlayerT;
  activityData: Activity;
}

const Player = ({ data, activityData }: Props) => {
  const [openSheet, setOpenSheet] = useState(false);
  const { image, name, gid } = data;

  const applyForTeamHandler = () => {};

  const playerHandler = () => {
    setOpenSheet(true);
  };

  if (!gid) {
    return (
      <TouchableOpacity style={styles.container} onPress={applyForTeamHandler}>
        <CircleFadingPlus color={colors.lightenGrey} size={55} />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={playerHandler}>
        <Image style={styles.image} source={{ uri: image }} />
        <Divider height={4} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <ActionSheet
        user={data}
        open={openSheet}
        setOpen={setOpenSheet}
        data={activityData}
      />
    </>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 70,
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
});
