import React, { useEffect } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { appImages, colors } from "../../../global/utilities";
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 2000);
  }, []);

  const getUserInfo = async () => {
    navigation.replace("Assesment");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FastImage
        resizeMode="contain"
        source={appImages.logo}
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

export default Splash;
