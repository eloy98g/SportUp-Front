import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

// Components
import StatusBar from "./components/StatusBar";
import Actions from "./components/Actions";
import Loading from "./components/Loading";

// Context
import CreateContext from "./context/CreateContext";

// Sections
import Sections, { lastSection, SectionName } from "./sections";

// Theme
import colors from "../../../theme/colors";

const Create = () => {
  const { status, section, setSection } = useContext(CreateContext);
  const currentSection =
    Sections.find((element) => element.name === section) ?? Sections[0];

  const { position, component } = currentSection;
  const value = ((position + 1) / Sections.length) * 100;

  const showLeft = currentSection.position !== 0;
  const leftTitle = "Volver";
  const rightTitle =
    currentSection.position === lastSection.position ? "Finalizar" : "Aceptar";

  const leftAction = () => {
    const prevSection =
      Sections.find(
        (element) => element.position === currentSection.position - 1
      ) ?? Sections[0];
    setSection(prevSection.name as SectionName);
  };

  const rightAction = () => {
    if (currentSection.position === lastSection.position) {
    } else {
      const nextSection =
        Sections.find(
          (element) => element.position === currentSection.position + 1
        ) ?? Sections[0];
      setSection(nextSection.name as SectionName);
    }
  };

  if (status === "loading" || status === "idle") {
    return <Loading />;
  }

  if (status === "error") {
    // TODO: render error
  }

  return (
    <View style={styles.container}>
      <StatusBar value={value} position={position + 1} max={Sections.length} />
      {component}
      <Actions
        showLeft={showLeft}
        leftAction={leftAction}
        rightAction={rightAction}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
      />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 90,
    backgroundColor: colors.white,
  },
});