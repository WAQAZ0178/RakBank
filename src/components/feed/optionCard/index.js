import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
const OptionCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={
        item.flag === true ? styles.selectedCardMainView : styles.CardMainView
      }
      onPress={() => {
        // setworkoutLevel(item.title);
        // let arr = [...data];
        // let option = arr[flatindex].option;
        // option.map((Element) => {
        //   Element.flag = false;
        // });
        // option[index].flag = true;
        // arr[flatindex].option = option;
        // setData(arr);
      }}
    >
      <View style={styles.inner}>
        <RegularText
          label={item?.title}
          fontSize={2}
          color={colors.PrimaryBlue950}
          numberOfLines={1}
          maxWidth={80}
          style={[
            // styles.title,
            { color: item.flag === true ? colors.primary : colors.black },
          ]}
        />

        {/* <Text
          style={[
            styles.title,
            { color: item.flag === true ? AppColor.primary : textColor.black },
          ]}
        >
          {item?.title}
        </Text> */}
        <Icon
          name="check-circle"
          type="feather"
          color={colors.grey}
          size={responsiveFontSize(3)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(OptionCard);
