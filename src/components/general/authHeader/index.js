import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icon } from "react-native-elements";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
import BoldText from "../../../typography/boldText";
const AuthHeader = ({
  onBackPress,
  title,
  textColor = colors.primaryBlueBrand,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.emptyBox}>
        <Icon
          type="material-icon"
          name="arrow-back-ios"
          color={textColor}
          size={responsiveFontSize(2.5)}
        />
      </TouchableOpacity>

      <BoldText
        color={textColor}
        fontSize={2.2}
        label={title}
        numberOfLines={1}
        maxWidth={40}
        style={styles.titleText}
      />
    </View>
  );
};
export default AuthHeader;
