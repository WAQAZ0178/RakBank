import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { HomeCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";

const Assesment = (props) => {
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
      <View style={styles.innerContainer}></View>
    </SafeAreaView>
  );
};

export default Assesment;
