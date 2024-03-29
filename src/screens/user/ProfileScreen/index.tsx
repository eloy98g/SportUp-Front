import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import ProfileHeader from "./components/ProfileHeader";
import Description from "./components/Description";
import Divider from "../../../components/common/Divider";
import Name from "./components/Name";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import { PHONE } from "../../../theme/breakPoints";

// Types
import User from "../../../store/types/User";
import colors from "../../../theme/colors";

const ProfileScreen = ({ route }: any) => {
  const user = useAppSelector((state) => state.user.user);
  const [userData, setUserData] = useState<User>(user);
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const gid = route.params?.gid;

  useEffect(() => {
    if (gid) {
      // TODO: Lógica para traerse los datos de un usuario
      setIsExternal(true);
    } else {
      setIsExternal(false);
    }
  }, []);

  return (
    <Screen>
      <StatusBar backgroundColor={colors.primary} />
      <ProfileHeader data={userData} isExternal={isExternal} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Name name={userData.name} verified={userData.verified} />
          <Divider height={10} />
          <Description description={userData.description} />
        </View>
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 220,
  },
  info: {
    width: "100%",
    alignItems: "center",
  },
});
