import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Icon } from "react-native-elements";
import RegularText from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
import BoldText from "../../../typography/boldText";

const AppButton = ({
  title,
  loading,
  disabled,
  backgroundColor = colors.PrimaryRed,
  loaderColor = "white",
  width = 95,
  marginTop = 0,
  onPress,
  hasBorder = false,
  borderColor,
}) => {
  const containerStyle = {
    backgroundColor: backgroundColor,
    width: responsiveWidth(width),
    marginTop: responsiveHeight(marginTop),
    borderWidth: hasBorder ? 1 : 0,
    borderColor: hasBorder ? borderColor : "transparent",
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} size={"small"} />
      ) : (
        <View style={styles.innerContainer}>
          <BoldText
            maxWidth={50}
            fontSize={2}
            numberOfLines={1}
            label={title}
            color={loaderColor}
            style={styles.buttonText}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export const ButtonWithIcon = ({
  title,
  loading,
  disabled,
  backgroundColor = colors.primaryGreenBrand,
  loaderColor = "white",
  width = 95,
  marginTop = 0,
  onPress,
  hasBorder = false,
  borderColor,
  iconName = "menu",
  iconType = "feather",
  iconSize = 2.5,
  height = 7,
}) => {
  const containerStyle = {
    backgroundColor: backgroundColor,
    width: responsiveWidth(width),
    marginTop: responsiveHeight(marginTop),
    borderWidth: hasBorder ? 1 : 0,
    borderColor: hasBorder ? borderColor : "transparent",
    height: responsiveHeight(height),
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} size={"small"} />
      ) : (
        <View style={styles.IconButtonInnerContainer}>
          <Icon
            name={iconName}
            type={iconType}
            size={responsiveFontSize(iconSize)}
            color={loaderColor}
          />
          <BoldText
            maxWidth={50}
            fontSize={1.8}
            numberOfLines={1}
            label={title}
            color={loaderColor}
            style={styles.iconText}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
