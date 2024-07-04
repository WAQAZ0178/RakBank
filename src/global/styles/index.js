import { Platform } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { colors } from "../utilities";
const getShadow = (elevation = 5, shadowColor = "#0000") => ({
  ...(Platform.OS === "ios"
    ? {
        shadowColor: shadowColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: elevation,
      }
    : {
        elevation: elevation,
      }),
});

const topMargin = (marginTop) => ({
  marginTop: responsiveHeight(marginTop),
});

const changeBGColor = (color) => ({
  backgroundColor: color,
});

const border = (borderWid, color = "black") => ({
  borderWidth: borderWid,
  borderColor: color,
});

export { getShadow, changeBGColor, topMargin, border };
