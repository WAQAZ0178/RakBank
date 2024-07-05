import React, { useCallback, useState } from "react";
import { View, StatusBar, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { OptionCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";
import { AppButton, AuthHeader } from "../../../components/general";
import { ACTIONS } from "../../../store/actions/question";

const Assesment = (props) => {
  const { navigation } = props;
  const list = useSelector((state) => state?.state?.reducer?.questionList);
  const [question, setQuestions] = useState(list);
  const [currentIndex, setcurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const onPressOption = useCallback(
    (item, index) => {
      setQuestions((prevQuestions) => {
        const updatedQuestions = prevQuestions.map((question, qIndex) => {
          if (qIndex === currentIndex) {
            const updatedOptions = question.options.map((option, oIndex) => ({
              ...option,
              isSelected: oIndex === index,
            }));
            return { ...question, options: updatedOptions };
          }
          return question;
        });

        dispatch(ACTIONS.setQuestionList(updatedQuestions));
        return updatedQuestions;
      });
    },
    [currentIndex]
  );

  const onClickNext = () => {
    if (currentIndex < question?.length - 1) {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const onClickPrevious = () => {
    if (currentIndex > 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };

  const handleFinish = () => {
    // Calculate the total score
    const totalScore = question.reduce((sum, question) => {
      const selectedOption = question.options.find(
        (option) => option.isSelected
      );
      return sum + (selectedOption ? selectedOption.score : 0);
    }, 0);

    // Determine the profile based on the total score
    let profile = "";
    if (totalScore >= 5 && totalScore <= 8) {
      profile = "🛡️ Conservative: Safe and steady.";
    } else if (totalScore >= 9 && totalScore <= 12) {
      profile = "⚖️ Balanced: A mix of safety and growth.";
    } else if (totalScore >= 13) {
      profile = "🚀 Aggressive: Woohoo! You take big risks!";
    }

    // Navigate to the result screen and pass the score and profile
    navigation.replace("Result", { totalScore, profile });
  };

  const renderOption = (item, index) => {
    return (
      <OptionCard
        onClickOption={() => onPressOption(item, index)}
        item={item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />
      <AuthHeader
        onPress={{}}
        title={`Q ${currentIndex + 1} : ${question[currentIndex]?.question}`}
      />

      <View style={styles.innerContainer}>
        <FlatList
          data={question[currentIndex]?.options}
          renderItem={({ item, index }) => renderOption(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        {currentIndex > 0 && (
          <AppButton
            backgroundColor={colors.black}
            disabled={false}
            loading={false}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => onClickPrevious()}
            title="Previous"
            width={40}
          />
        )}
        {currentIndex < question?.length - 1 ? (
          <AppButton
            backgroundColor={colors.black}
            disabled={false}
            loading={false}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => onClickNext()}
            title="Next"
            width={currentIndex > 0 ? 40 : 95}
          />
        ) : (
          <AppButton
            backgroundColor={colors.black}
            disabled={false}
            loading={false}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => handleFinish()}
            title="Finish"
            width={40}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Assesment;
