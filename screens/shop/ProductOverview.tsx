import React from "react";
import {
  Button,
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import ProductItem from "../../components/shop/ProductItem";
import { addtocart } from "../../redux-duck/slices/cartslice";

const ProductOverview = (props: any) => {
  const dispatch = useDispatch();

  const product = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            id={itemData.item.id}
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            navigation={props.navigation}
            tocart={() => {
              ToastAndroid.show("Item added successfully", ToastAndroid.LONG);
              dispatch(addtocart(itemData.item));
            }}
          />
        )}
      />
      {/* <View>
        <Button
          title="Go back to first screen in stack"
          onPress={() => props.navigation.popToTop()}
        />
      </View> */}
    </View>
  );
};

export default ProductOverview;
