import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { OptionCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";
import { AuthHeader } from "../../../components/general";

const Assesment = (props) => {
  const { navigation } = props;
  const reduxList = useSelector((state) => state?.state?.todoReducer?.todolist);
  const [dataList, setdataList] = useState(reduxList | []);

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
      </View>
    </SafeAreaView>
  );
};

export default Assesment;
