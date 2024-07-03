import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { HomeCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";

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
        {/* {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={"large"} color={"black"} />
          </View>
        ) : (
          <FlatList
            data={dataList}
            renderItem={({ item }) => renderItem(item)}
            bounces={true}
            contentContainerStyle={{ flex: 1 }}
            bouncesZoom={true}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={15}
            maxToRenderPerBatch={15}
            removeClippedSubviews={true}
            shouldItemUpdate={(props, nextProps) =>
              props.item !== nextProps.item
            }
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={refreshScreen} />
            }
          />
        )} */}
      </View>
    </SafeAreaView>
  );
};

export default Result;
