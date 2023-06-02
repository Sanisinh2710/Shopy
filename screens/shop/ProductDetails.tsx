import { useId } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";

const ProductDetails = (props: any) => {
  const { id } = props.route.params;

  const chooseProduct = useSelector((state: RootState) =>
    state.products.availableProducts.find((product: any) => product.id === id)
  );

  console.log(chooseProduct.description);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: chooseProduct.imageUrl }} style={styles.image} />
      </View>
      <Button title="Home" onPress={() => props.navigation.popToTop()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 400,
  },
});
export default ProductDetails;
