import { View, FlatList, PermissionsAndroid, Button } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import OrderItem from "../../components/shop/MyOrders";

const MyOrders = () => {
  const orders = useSelector((state: RootState) => state.orderItems.orders);

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(data) => (
          <OrderItem
            amount={data.item.totalAmmount}
            orderId={data.item.orderId}
            date={data.item.orderDate}
            items={data.item.items}
          />
        )}
      />
    </View>
  );
};

export default MyOrders;
