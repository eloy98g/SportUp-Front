import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import TouchableText from "../../../../components/common/buttons/TouchableText";
import MainButton from "../../../../components/common/buttons/MainButton";
import TextInput from "../../../../components/common/inputs/TextInput";
import Divider from "../../../../components/common/Divider";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../../hooks";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Store
import signUp from "../../../../store/features/user/methods/signUp";

// Utils
import { validPassword } from "../../../../utils/auth/validPassword";
import { validEmail } from "../../../../utils/auth/validEmail";

const SignUp = ({ setSection, setOpen, navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const buttonActive =
    validPassword(password) &&
    validPassword(password2) &&
    password === password2 &&
    validEmail(email);

  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector((state) => state.user);

  const signInHandler = async () => {
    dispatch(signUp({ email: email, password }));
  };

  useEffect(() => {
    if (user.gid) {
      setOpen(false);
      navigation.navigate("Home" as never);
    }
  }, [user]);

  const goToLogIn = () => setSection("LogIn");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <Divider height={22} />
      <TextInput value={email} onChange={setEmail} placeholder="Usuario" />
      <Divider height={22} />
      <TextInput
        value={password}
        onChange={setPassword}
        placeholder="Contraseña"
        secure
      />
      <Divider height={22} />
      <TextInput
        value={password2}
        onChange={setPassword2}
        placeholder="Repite la contraseña"
        secure
      />
      <Divider height={22} />
      <MainButton
        title={"Aceptar"}
        onPress={signInHandler}
        fontSize={18}
        loading={loading}
        active={buttonActive}
      />
      <Divider height={22} />
      {error !== "" && <Text style={styles.error}>{error}</Text>}
      <View style={styles.row}>
        <Text style={styles.text}>¿Ya tienes cuenta? </Text>
        <TouchableText
          onPress={goToLogIn}
          text="Inicia sesión"
          textStyle={[styles.text, { fontFamily: family.bold }]}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    maxWidth: PHONE,
  },
  title: {
    fontFamily: family.bold,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 18,
    textAlign: "left",
  },
  error: {
    fontFamily: family.normal,
    color: colors.red,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});