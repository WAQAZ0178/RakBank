import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  CardMainView: {
    width: responsiveWidth(88),
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: responsiveHeight(7),
    backgroundColor: "white",
    marginVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(3),
    justifyContent: "center",
  },
  selectedCardMainView: {
    width: responsiveWidth(88),
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: responsiveHeight(7),
    backgroundColor: "white",
    marginVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(3),
    justifyContent: "center",
    borderWidth: responsiveWidth(0.2),
    borderColor: AppColor.primary,
  },
});

export default styles;
