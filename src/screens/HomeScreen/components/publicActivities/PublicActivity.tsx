import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";

// Types
import Activity from "../../../../store/types/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";

const PublicActivity = (props: Activity) => {
  const {
    sport,
    access,
    type,
    startDate,
    teams,
    playersPerTeam,
    currentPlayers,
  } = props;
  const { color, name } = sport;

  // TODO calcular distancia
  const distance = "a 500m";

  const date = unixToDate(startDate);
  const totalPlayers = teams * playersPerTeam;

  return (
    <View
      style={[styles.container, { backgroundColor: color || colors.primary }]}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.icons}>
            <Icon icon={access} color={colors.black} size={14} />
            {type !== "normal" && (
              <>
                <Divider width={5} />
                <Icon icon={type} color={colors.black} size={14} />
              </>
            )}
          </View>
        </View>
        <Text style={styles.subText}>{distance}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subText}>{date}</Text>
        <Text style={styles.title}>
          ({currentPlayers}/{totalPlayers})
        </Text>
      </View>
    </View>
  );
};

export default PublicActivity;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 90,
    borderRadius: 12,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: family.bold,
  },
  icons: {
    flexDirection: "row",
  },
  subText: {
    fontSize: 10,
    color: colors.black,
    fontFamily: family.semibold,
  },
});
