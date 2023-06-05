import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import { create } from "react-test-renderer";
import { FlatList } from "react-native";
import MyCart from "../../components/shop/MyCart";

const Cart = (props: any) => {
  const onCartProducts = useSelector((state: RootState) => {
    const array = [];
    for (const key in state.cartItems.items) {
      array.push({
        productID: key,
        productTitle: state.cartItems.items[key].productTitle,
        productPrice: state.cartItems.items[key].productPrice,
        quantity: state.cartItems.items[key].quantity,
        sum: state.cartItems.items[key].sum,
        img: state.cartItems.items[key].image,
      });
    }
    return array;
  });

  console.log(onCartProducts);

  const totalAmmount = useSelector(
    (state: RootState) => state.cartItems.totalAmmount
  );

  return (
    <View style={Styles.screen}>
      {onCartProducts.length === 0 ? (
        <View style={Styles.nodata}>
          <Text style={Styles.nodat}>No any items in your Cart</Text>
        </View>
      ) : (
        <FlatList
          data={onCartProducts}
          keyExtractor={(item) => item.productID}
          renderItem={({ item }) => (
            <MyCart
              id={item.productID}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              quantity={item.quantity}
              sum={item.sum}
              img={item.img}
            />
          )}
        />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    backgroundColor: "#BEBEBE",
  },
  nodata: {
    marginVertical: "50%",
    alignItems: "center",
  },
  nodat: {
    fontSize: 20,
    fontWeight: "400",
  },
});
export default Cart;
