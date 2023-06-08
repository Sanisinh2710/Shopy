import { Button, StyleSheet, View } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.continer}>
      <Button
        title="View All Products"
        onPress={() => navigation.navigate("ProductsOverView")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: { flex: 1, alignItems: "center", justifyContent: "center" },
});
export default Home;
