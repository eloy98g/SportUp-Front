import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

// Components
import TouchableInfoContainer from "./components/TouchableInfoContainer";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import StaticInfo from "./components/StaticInfo";
import Actions from "./components/Actions";
import JoinButton from "./components/JoinButton";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Result from "./components/Result";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";

// Methods
import isPlayer from "./methods/isPlayer";

// Types
import Activity from "../../../store/types/activity/Activity";

// Store
import mapActivity from "../../../store/features/activity/methods/mapActivity";
import AdminButton from "./components/AdminButton";
import Api from "../../../services/api";

const ActivityDetail = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const gid = route.params?.gid;
  const [activityData, setActivityData] = useState<Activity>();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [isAdmin, setIsAdmin] = useState(false);
  const [playerView, setPlayerView] = useState(false);

  useEffect(() => {
    if (activityData) {
      setIsAdmin(userGid === activityData.admin);
      setPlayerView(isPlayer(userGid, activityData?.teams));
    }
  }, [userGid, activityData]);

  console.log('RENDER')
  
  const getData = async () => {
    setStatus("loading");
    if (gid) {
      const response = await Api.activity.getById(gid);
      if (response.status === "success") {
        setActivityData(mapActivity(response.data));
        setStatus("success");
      } else {
        setStatus("error");
        setError(response.message);
      }
    } else {
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Todo: generate Loading Component and remove duplicates
  if (status === "loading" || status === "idle") {
    return (
      <Screen>
        <ActivityIndicator size="small" color={colors.primary} />
      </Screen>
    );
  }

  // Todo: generate Error Component and remove duplicates
  if (status === "error") {
    return (
      <Screen>
        <Text>{error}</Text>
      </Screen>
    );
  }

  if (status === "success" && activityData) {
    return (
      <Screen>
        <Header data={activityData} isAdmin={isAdmin} playerView={playerView} />
        <View style={styles.content}>
          <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
            <Divider height={200} />
            {!isAdmin && <JoinButton data={activityData} userGid={userGid} />}
            {isAdmin && <AdminButton data={activityData} />}
            <TouchableInfoContainer data={activityData} />
            <Divider height={18} />
            <Teams activity={activityData} />
            {activityData.status === "finished" && (
              <>
                <Divider height={18} />
                <Result
                  teams={activityData.teams}
                  result={activityData.result}
                />
              </>
            )}
            <Divider height={6} />
            <StaticInfo data={activityData} />
            <Actions
              data={activityData}
              playerView={playerView}
              userGid={userGid}
            />
            <Divider height={24} />
          </ScrollView>
        </View>
      </Screen>
    );
  }
};

export default ActivityDetail;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    maxWidth: PHONE,
    paddingHorizontal: 24,
    height: 1,
  },
  info: {
    width: "100%",
    height: 1,
  },
});
