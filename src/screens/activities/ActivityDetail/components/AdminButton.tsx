import React from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";

// Types
import Activity from "../../../../store/types/activity/Activity";

interface Props {
  data: Activity;
}

const AdminButton = ({ data }: Props) => {
  const navigation = useNavigation();
  const buttonHandler = () => {
    navigation.navigate(
      "ActivityAdminScreen" as never,
      { activityGid: data.gid } as never
    );
  };

  return (
    <>
      <MainButton
        color={colors.white}
        textColor={colors.primary}
        height={40}
        title={"Administrar actividad"}
        onPress={buttonHandler}
      />
      <Divider height={18} />
    </>
  );
};

export default AdminButton;
