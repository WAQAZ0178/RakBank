import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: responsiveWidth(100),
  },
  ImageBackground: {
    width: responsiveWidth(100),
    resizeMode: "contain",
  },
  imagelogo: {
    height: responsiveHeight(25),
    width: responsiveWidth(50),
    resizeMode: "contain",
  },
  logoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(90),
    alignSelf: "center",
  },
  TextView: {
    width: responsiveWidth(95),
    alignSelf: "center",
    marginTop: responsiveHeight(-6),
    marginBottom: responsiveHeight(3),
  },
});
