import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
import { border, getShadow } from "../../../global/styles";
const styles = StyleSheet.create({
  CardMainView: {
    ...getShadow(5, "#000"),
    width: responsiveWidth(95),
    alignSelf: "center",
    height: responsiveHeight(7),
    backgroundColor: "white",
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    justifyContent: "center",
  },
  innerContainer: {
    width: responsiveWidth(90),
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  selectedCardMainView: {
    ...getShadow(5, "#000"),
    ...border(responsiveWidth(0.2), colors.facebook),
    width: responsiveWidth(95),
    alignSelf: "center",
    height: responsiveHeight(7),
    backgroundColor: "white",
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
    justifyContent: "center",
    margin: responsiveWidth(0.5),
  },
});

export default styles;
