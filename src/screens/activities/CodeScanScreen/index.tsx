import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Scanner from "../../../components/common/inputs/Scanner";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

// Placeholder
import JOIN_CONFIRMATION from "../../../api/placeholders/JOIN_CONFIRMATION";

// States
import CodeError from "./states/CodeError";
import CodeSuccess from "./states/CodeSuccess";
import Loading from "./states/Loading";

// Theme
import colors from "../../../theme/colors";
import useStatus from "../../../hooks/useStatus";

// Types
import Activity from "../../../store/types/activity/Activity";
import mapActivity from "../../../store/features/activity/methods/mapActivity";

type VALUE = string | null;

const CodeScanScreen = () => {
  const [value, setValue] = useState<VALUE>(null);
  const { status, setStatus } = useStatus();
  const [activity, setActivity] = useState<Activity>(
    mapActivity(JOIN_CONFIRMATION)
  );
  const userGid = useAppSelector((state) => state.user.user.gid);

  const codeHandler = (val: VALUE) => {
    setValue(val);
  };

  useEffect(() => {
    if (value) {
      setStatus("loading");
      // TODO: Api call for getting data of user trying to play an activity

      setTimeout(() => {
        setValue(null);
        if (value === "uno") {
          setStatus("success");
        } else {
          setStatus("error");
        }
      }, 2000);
    }
  }, [value]);

  return (
    <Screen>
      <BackHeader title="Escanear Código" />
      <Divider height={80} />
      <View style={styles.container}>
        {status === "idle" && (
          <View style={styles.content}>
            <Scanner setValue={codeHandler} />
          </View>
        )}
        {status === "loading" && <Loading />}
        {status === "success" && <CodeSuccess data={activity} />}
        {status === "error" && <CodeError setStatus={setStatus} />}
      </View>
    </Screen>
  );
};

export default CodeScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  content: {
    width: "100%",
    height: "100%",
  },
});
