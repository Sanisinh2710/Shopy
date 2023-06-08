import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import OrderItem from "../../components/shop/MyOrders";

const MyOrders = () => {
  const orders = useSelector((state: RootState) => state.orderItems.orders);

  console.log(orders[0].items[0]);

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
