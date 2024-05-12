import React from "react";
import { StyleSheet, View } from "react-native";
import { Share2, MessageCircleMore, UserRoundCog } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import Divider from "../../../../../components/common/Divider";

// Methods
import shareActivity from "../../methods/shareActivity";

// Theme
import colors from "../../../../../theme/colors";

// Types
import Activity from "../../../../../store/types/activity/Activity";
import useNavigate from "../../../../../hooks/useNavigate";

interface Props {
  isAdmin: boolean;
  playerView?: boolean;
  data: Activity;
}

const ActionsGroup = ({ isAdmin, data, playerView }: Props) => {
  const { chat, gid, name } = data;
  const { navigateTo } = useNavigate();

  const chatHandler = () => {
    navigateTo("Chat", { chatId: chat, chatName: name });
  };

  const adminHandler = () => {
    navigateTo("ActivityAdminScreen", { activityGid: gid });
  };

  const shareHandler = async () => {
    await shareActivity(data);
  };

  return (
    <View style={styles.group}>
      {isAdmin && (
        <>
          <IconButton
            onPress={adminHandler}
            icon={<UserRoundCog size={24} color={colors.white} />}
          />
          <Divider width={8} />
        </>
      )}

      <IconButton
        onPress={shareHandler}
        icon={<Share2 size={24} color={colors.white} />}
      />
      {playerView && (
        <>
          <Divider width={10} />
          <IconButton
            onPress={chatHandler}
            icon={<MessageCircleMore size={24} color={colors.white} />}
          />
        </>
      )}
    </View>
  );
};

export default ActionsGroup;

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
