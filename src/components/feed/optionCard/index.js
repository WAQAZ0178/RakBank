import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import RegularText from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
const OptionCard = ({ item, onClickOption }) => {
  const getColor = () => {
    return item?.isSelected ? colors.facebook : colors.black;
  };
  return (
    <TouchableOpacity
      style={
        item?.isSelected === true
          ? styles.selectedCardMainView
          : styles.CardMainView
      }
      onPress={onClickOption}
    >
      <View style={styles.innerContainer}>
        <RegularText
          label={item?.option}
          fontSize={2}
          color={colors.PrimaryBlue950}
          numberOfLines={2}
          maxWidth={80}
          style={{ ...styles.title, color: getColor() }}
        />

        <Icon
          name="check-circle"
          type="feather"
          color={getColor()}
          size={responsiveFontSize(3)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(OptionCard);
