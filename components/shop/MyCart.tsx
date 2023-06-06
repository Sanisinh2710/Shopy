import { Image, StyleSheet, Text, View } from "react-native";

const MyCart = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: props.img }} style={styles.img} />
        <View style={styles.det}>
          <Text style={[styles.text]}>Title:{props.productTitle}</Text>
          <Text style={styles.text}>Price:{props.productPrice}</Text>
          <Text style={styles.text}>Quantity:{props.quantity}</Text>
          <Text style={styles.text}>Total Price:{props.sum}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowOpacity: 10,
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: 100,
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
  },
  det: {
    flexDirection: "column",
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "600",
  },
  img: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: 100,
    height: 100,
  },
});
export default MyCart;
