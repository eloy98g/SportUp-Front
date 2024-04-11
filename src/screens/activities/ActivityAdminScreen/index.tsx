import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Price from "./components/Price";
import Visibility from "./components/Visibility";
import ChangeTeams from "./components/ChangeTeams";

// Types
import Activity from "../../../store/types/activity/Activity";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import MainButton from "../../../components/common/buttons/MainButton";
import useStatus from "../../../hooks/useStatus";

interface Props {
  route: {
    params: { data: Activity };
  };
}

const ActivityAdminScreen = ({ route }: Props) => {
  const { status, setStatus } = useStatus();
  const { data } = route.params;
  const [activity, setActivity] = useState(data);

  const finishHandler = async () => {
    // TODO: Api call for editing an activity
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 300);
  };

  if (!data) {
  }

  return (
    <Screen>
      <BackHeader title="Administrar" />
      <Divider height={80} />
      <View style={styles.content}>
        {data ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Divider height={16} />
            <Visibility data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <ChangeTeams data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <Price data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <View style={styles.buttonWrapper}>
              <MainButton
                title="Guardar cambios"
                onPress={finishHandler}
                loading={status === "loading"}
              />
            </View>
          </ScrollView>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>
              {"Error al obtener los datos de la actividad"}
            </Text>
          </View>
        )}
      </View>
    </Screen>
  );
};

export default ActivityAdminScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
  },
  scroll: {
    width: "100%",
    paddingHorizontal: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.red,
  },
  buttonWrapper: {
    height: 46,
    width: "100%",
  },
});
