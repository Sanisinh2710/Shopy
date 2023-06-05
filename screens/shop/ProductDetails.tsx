import { useId } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import { addtocart } from "../../redux-duck/slices/cartslice";

const ProductDetails = (props: any) => {
  const { id } = props.route.params;
  const dispatch = useDispatch();

  const chooseProduct = useSelector((state: RootState) =>
    state.products.availableProducts.find((product: any) => product.id === id)
  );

  console.log(chooseProduct.description);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageCon}>
          <Image
            source={{ uri: chooseProduct.imageUrl }}
            style={styles.image}
          />
          <Button
            title="Add to cart"
            color={"purple"}
            onPress={() => {
              ToastAndroid.show("Item added successfully", ToastAndroid.LONG);
              dispatch(addtocart(chooseProduct));
            }}
          />
        </View>
        <Text style={styles.text1}>{chooseProduct.price}</Text>
        <Text style={styles.text1}>{chooseProduct.description}</Text>
        <Button title="Home" onPress={() => props.navigation.popToTop()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  imageCon: {
    width: "100%",
  },
  image: {
    width: 300,
    height: 300,
    borderColor: "purple",
    borderRadius: 10,
    backgroundColor: "#949494",
    marginHorizontal: 50,
    marginVertical: 15,
  },
  text1: {
    fontSize: 16,
    padding: 10,
    fontWeight: "bold",
  },
});
export default ProductDetails;
