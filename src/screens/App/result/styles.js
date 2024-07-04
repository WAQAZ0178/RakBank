import { StyleSheet } from "react-native";
import { colors } from "../../../global/utilities";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
  },

  profilePicture: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    alignSelf: "center",
    marginTop: responsiveHeight(3),
    borderColor: colors.PrimaryRed,
    borderWidth: 1,
    marginBottom: responsiveHeight(3),
  },

  btnContainer: {
    position: "absolute",
    bottom: responsiveHeight(3),
  },
});

export default styles;
