import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

const ProductItem = (props: any) => {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        props.navigation.navigate("ViewProductDetails", {
          id: props.id,
          title: props.title,
        })
      }
      useForeground
    >
      <View style={styles.product}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={{ fontWeight: "900", fontSize: 15 }}>
              {props.title}
            </Text>
            <Text>Price: {props.price}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={"purple"}
              title="View Details"
              onPress={() =>
                props.navigation.navigate("ViewProductDetails", {
                  id: props.id,
                  title: props.title,
                })
              }
            />
            <Button
              color={"purple"}
              title="Add to Cart"
              onPress={props.tocart}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "purple",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontWeightt: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
export default ProductItem;
