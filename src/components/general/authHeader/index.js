import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { appImages, colors } from "../../../global/utilities";
import styles from "./styles";
import MediumText from "../../../typography/mediumText";
import BoldText from "../../../typography/boldText";
const AuthHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={appImages.header} style={styles.ImageBackground}>
        <View style={styles.logoView}>
          <Image
            source={appImages.whiteLogo}
            style={styles.imagelogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.TextView}>
          <BoldText
            color={colors.white}
            fontSize={1.8}
            label={title}
            numberOfLines={2}
            maxWidth={80}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default AuthHeader;
