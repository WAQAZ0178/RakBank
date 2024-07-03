import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { OptionCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";
import RegularText from "../../../typography/regularText";
import { AuthHeader } from "../../../components/general";
const Result = (props) => {
  const { navigation } = props;
  const reduxList = useSelector((state) => state?.state?.todoReducer?.todolist);
  const [dataList, setdataList] = useState(reduxList | []);

  // const renderItem = (item) => {
  //   return (
  //     <HomeCard
  //       DeleteItem={onPressDetails(item)}
  //       id={item?.id}
  //       description={item?.todo}
  //     />
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />
      <View style={styles.innerContainer}>
        <AuthHeader
          onPress={{}}
          title={
            "How would you react to a sudden drop in the value of your investments?"
          }
        />
        <OptionCard item={{ title: "hey" }} />
        <RegularText
          fontSize={2}
          numberOfLines={1}
          maxWidth={80}
          color="red"
          label="Result screen"
        />
      </View>
    </SafeAreaView>
  );
};

export default Result;
