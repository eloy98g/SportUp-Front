import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import ProfileHeader from "./components/ProfileHeader";

// Hooks
import { useAppSelector } from "../../../hooks";
import { PHONE } from "../../../theme/breakPoints";
import User from "../../../store/types/User";

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
      <ProfileHeader data={userData} isExternal={isExternal} />
      <View style={styles.content}></View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 100,
  },
});
