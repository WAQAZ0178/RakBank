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
    marginTop: responsiveHeight(3),
    height: responsiveHeight(50),
  },
  bottomButtonContainer: {
    flex: 1,
    width: responsiveWidth(95),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
