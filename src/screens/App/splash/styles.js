import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveWidth(35),
  },
});

export default styles;
