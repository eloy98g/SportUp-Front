import React, { useCallback } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Components
import Divider from "../../../components/common/Divider";
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import ChatCard from "./components/ChatCard";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// Store
import { updateLastChatView } from "../../../store/features/chat/chatSlice";

// Types
import { PHONE } from "../../../theme/breakPoints";

const ChatListScreen = () => {
  const chats = useAppSelector((state) => state.chat.chat);

  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(updateLastChatView());
    }, [])
  );

  return (
    <Screen>
      <BackHeader title="Mensajes" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Divider height={10} />
          {chats.map((chat, index) => (
            <>
              {index !== 0 && <Divider key={index} height={10} />}
              <ChatCard key={chat.gid} data={chat} />
            </>
          ))}
          <Divider height={80} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    flex: 1,
    paddingTop: 80,
  },
  divider: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
