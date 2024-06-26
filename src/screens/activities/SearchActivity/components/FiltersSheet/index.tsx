import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Sheet from "../../../../../components/common/Sheet";
import Divider from "../../../../../components/common/Divider";
import ResetButton from "./ResetButton";
import AreaFilter from "./AreaFilter";
import PriceFilter from "./PriceFilter";
import SortByFilter from "./SortByFilter";
import SportFilter from "./SportFilter";
import TypeFilter from "./TypeFilter";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  open: boolean;
  openHandler: (T: any) => void;
}

const FiltersSheet = ({ open, openHandler }: Props) => {
  return (
    <Sheet open={open} openHandler={openHandler} padding={0} modal={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Filtros</Text>
        <Divider height={12} />
        <SportFilter />
        <Divider height={12} />
        <TypeFilter />
        <Divider height={12} />
        <AreaFilter />
        <Divider height={12} />
        <PriceFilter />
        <Divider height={12} />
        <SortByFilter />
        <Divider height={24} />
        <ResetButton />
      </View>
    </Sheet>
  );
};

export default FiltersSheet;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  container: {
    width: "100%",
    height: 550,
  },
  resetButton: {
    width: 120,
  },
});
