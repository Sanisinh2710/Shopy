import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import React from "react";
import { Button, FlatList, View } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { deleteProduct } from "../../redux-duck/slices/productsSlice";

const UserProduct = (props: any) => {
  const dispatch = useDispatch();
  const userProduct = useSelector(
    (state: RootState) => state.products.userProducts
  );

  // console.log(userProduct);

  return (
    <View>
      <FlatList
        data={userProduct}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            id={itemData.item.id}
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            navigation={props.navigation}
          >
            <Button color={"purple"} title="Edit" />
            <Button
              color={"purple"}
              title="Delete"
              onPress={() => dispatch(deleteProduct(itemData.item))}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export default UserProduct;
