import { View, Text, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";

const MyOrders = () => {
  const orders = useSelector((state: RootState) => state.orderItems.orders);

  console.log(orders[0]);

  return (
    <View>
      <Text style={{ color: "red" }}>hello</Text>
    </View>
  );
};

export default MyOrders;
