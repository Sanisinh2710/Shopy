import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import React from "react";
import { Alert, Button, Share } from "react-native";

const UserProduct = () => {
  const userProduct = useSelector(
    (state: RootState) => state.products.userProducts
  );

  console.log(userProduct);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <Button title="Go" onPress={onShare} />
    </>
  );
};

export default UserProduct;
