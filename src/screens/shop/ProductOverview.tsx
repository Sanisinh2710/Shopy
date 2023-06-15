import React from "react";
import {
  Button,
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import ProductItem from "../../components/shop/ProductItem";
import { addtocart } from "../../redux-duck/slices/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductOverview = (props: any) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  console.log(product);

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
          >
            <Button
              color={"purple"}
              title="View Details"
              onPress={() =>
                props.navigation.navigate("ViewProductDetails", {
                  id: itemData.item.id,
                  title: itemData.item.title,
                })
              }
            />
            <Button
              color={"purple"}
              title="Add to Cart"
              onPress={() => {
                ToastAndroid.show("Item added successfully", ToastAndroid.LONG);
                dispatch(addtocart(itemData.item));
                Vibration.vibrate();
              }}
            />
          </ProductItem>
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
