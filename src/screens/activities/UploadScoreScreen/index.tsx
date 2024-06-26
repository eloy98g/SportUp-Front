import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

// Types
import Activity from "../../../store/types/activity/Activity";

// Sections
import ActivitySelector from "./sections/ActivitySelector";
import ActivityScore from "./sections/ActivityScore";
import { useNavigation } from "@react-navigation/native";

const UploadScoreScreen = () => {
  const [section, setSection] = useState("selector");
  const [selectedActivity, setSelectedActivity] = useState<Activity>();

  const navigation = useNavigation();

  const currentActivities = useAppSelector(
    (state) => state.activity.currentActivities
  );

  const waitingForScoreActivities = currentActivities.filter(
    (activity) => activity.status === "waitingScore"
  );

  const redirectToScore = waitingForScoreActivities.length === 1;

  useEffect(() => {
    if (redirectToScore) {
      setSelectedActivity(waitingForScoreActivities[0]);
      setSection("score");
    }
  }, []);

  const backHandler = () => {
    if (
      section === "selector" ||
      (section === "score" && waitingForScoreActivities.length !== 1)
    ) {
      setSection("selector");
    } else {
      navigation.goBack();
    }
  };

  return (
    <Screen>
      <BackHeader title="Subir resultado" onBack={backHandler} />
      <View style={styles.content}>
        {section === "selector" && (
          <ActivitySelector
            data={waitingForScoreActivities}
            setSelectedActivity={setSelectedActivity}
            setSection={setSection}
          />
        )}
        {section === "score" && <ActivityScore activity={selectedActivity} />}
      </View>
    </Screen>
  );
};

export default UploadScoreScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 18,
    paddingTop: 96,
  },
});
