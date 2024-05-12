import React, { useEffect } from "react";
import * as Linking from "expo-linking";
import { StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Screen from "../../../components/common/Screen";
import Divider from "../../../components/common/Divider";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// Reducers
import fetchCurrentActivities from "../../../store/features/activity/methods/fetchCurrentActivities";
import fetchPublicActivities from "../../../store/features/activity/methods/fetchPublicActivities";
import fetchFollowing from "../../../store/features/following/methods/fetchFollowing";
import fetchChats from "../../../store/features/chat/methods/fetchChats";
import fetchFavSports from "../../../store/features/favSport/methods/fetchFavSports";
import { setLocation } from "../../../store/features/user/userSlice";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

// Utils
import getLocationPermissions from "../../../utils/location/getLocationPermissions";
import getLocation from "../../../utils/location/getLocation";
import useNavigate from "../../../hooks/useNavigate";

const SplashScreen = () => {
  const stateUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const { navigateTo } = useNavigate();

  const getData = async () => {
    await dispatch(fetchPublicActivities());

    if (!stateUser.gid) return;

    dispatch(fetchCurrentActivities(stateUser.gid));
    dispatch(fetchChats({ userGid: stateUser.gid }));
    dispatch(fetchFollowing({ userGid: stateUser.gid }));
    dispatch(fetchFavSports({ userGid: stateUser.gid }));
  };

  const splashHandler = async () => {
    try {
      await getData();
      const locationPermission = await getLocationPermissions();
      if (locationPermission) {
        const location = await getLocation();
        dispatch(setLocation(location));
      }
      navigateTo("Home");
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    splashHandler();
  }, []);

  useEffect(() => {
    const handleDeepLink = ({ url }: any) => {
      const { path, queryParams } = Linking.parse(url);

      if (path === "sportup" && queryParams?.gid) {
        navigateTo("Profile", { gid: queryParams.gid });
      }
    };

    Linking.addEventListener("url", handleDeepLink);
  }, []);

  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../../../assets/metadata/logo_unicolor.png")}
      />
      <Divider height={6} />
      <ActivityIndicator size="small" color={colors.primary} />
      <Divider height={6} />
      <Text style={styles.text}>Cargando...</Text>
    </Screen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 12,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
