import { View, Text, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";

const MyOrders = () => {
  const Orders = useSelector((state: RootState) => state.orderItems.orders);

  console.log(Orders);

  return (
    <View>
      <Text style={{ color: "red" }}>hello</Text>
    </View>
  );
};

export default MyOrders;
