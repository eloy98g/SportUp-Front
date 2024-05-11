import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import Search from "../../../components/common/inputs/Search";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import PlayerCard from "../../../components/social/PlayerCard";
import Loading from "../../../components/Status/Loading";
import Error from "../../../components/Status/Error";

// Hooks
import useStatus from "../../../hooks/useStatus";

// Services
import Api from "../../../services/api";

// Types
import Player from "../../../store/types/activity/Player";

// Theme
import colors from "../../../theme/colors";

const FindUserScreen = () => {
  const [users, setUsers] = useState<Player[]>([]);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");

  const searchHandler = async (search: string) => {
    if (status !== "loading") {
      try {
        setStatus("loading");
        const params = `name=${search}`;
        const response = await Api.user.getAll(params);
        if (response.status === "success") {
          setUsers(response.data);
          if (response.data.length === 0) {
            setStatus("empty");
          } else {
            setStatus("success");
          }
        } else {
          setError(response.message);
          setStatus("error");
        }
      } catch (error: any) {
        setError(error.message);
        setStatus("error");
      }
    }
  };

  return (
    <Screen>
      <BackHeader title="Buscar usuario" />
      <View style={styles.container}>
        <Search
          onSearch={searchHandler}
          placeholder="Buscar por nombre de usuario"
        />
        <ScrollView style={styles.scroll}>
          <Divider height={12} />
          {status === "loading" && (
            <View style={{ flex: 1 }}>
              <Loading />
            </View>
          )}
          {status === "error" && <Error error={error} />}
          {status === "empty" && (
            <Error color={colors.black} error="No se encontraron usuarios" />
          )}
          {status === "success" &&
            users.map((user: Player) => (
              <React.Fragment key={user.gid}>
                <PlayerCard data={user} />
                <Divider height={12} />
              </React.Fragment>
            ))}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default FindUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 92,
    justifyContent: "flex-start",
    paddingHorizontal: 12,
  },
  scroll: {
    width: "100%",
    height: 1,
  },
});
