import React, { useState } from "react";
import { View, StatusBar, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import { appImages, colors } from "../../../global/utilities";
import { AppButton } from "../../../components/general";
import BoldText from "../../../typography/boldText";
import SemiBoldText from "../../../typography/semiBoldText";
import { ACTIONS } from "../../../store/actions/question";
import { useDispatch } from "react-redux";
const Result = (props) => {
  const { navigation, route } = props;
  const { profile, totalScore } = route?.params;
  const dispatch = useDispatch();
  const onClickrestart = () => {
    dispatch(ACTIONS.resetData());
    navigation.replace("Assesment");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />

      <View style={styles.innerContainer}>
        <Image style={styles.profilePicture} source={appImages.user} />

        <BoldText
          maxWidth={50}
          fontSize={2}
          numberOfLines={1}
          label={"Your Profile"}
          color={colors.black}
          style={{}}
        />
        <SemiBoldText
          maxWidth={80}
          fontSize={2}
          numberOfLines={1}
          label={`Total Score: ${totalScore}`}
          color={colors.black}
        />
        <SemiBoldText
          maxWidth={80}
          fontSize={2}
          numberOfLines={2}
          label={`Profile: ${profile}`}
          color={colors.black}
        />
        <AppButton
          backgroundColor={colors.black}
          disabled={false}
          loading={false}
          loaderColor={colors.white}
          marginTop={45}
          onPress={() => onClickrestart()}
          title="Restart"
          width={90}
        />
      </View>
    </SafeAreaView>
  );
};

export default Result;
