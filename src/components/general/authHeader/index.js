import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { appImages, colors } from "../../../global/utilities";
import styles from "./styles";
import MediumText from "../../../typography/mediumText";
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
          <MediumText
            color={colors.white}
            fontSize={2.2}
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
