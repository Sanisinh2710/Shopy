import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { color, log } from "react-native-reanimated";
import MyCart from "./MyCart";

const OrderItem = (props: any) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.totalAmount}>OrderId: #{props.orderId}</Text>
          <Text style={styles.totalAmount}>Amount: {props.amount}</Text>
        </View>
        <View style={{}}>
          <Text style={styles.date}>Date: {props.date}</Text>
        </View>
      </View>
      <Button
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((items: { [key: string]: any }, i: number) => {
            return (
              <MyCart
                key={i}
                productPrice={items.productPrice}
                productTitle={items.productTitle}
                quantity={items.quantity}
                sum={items.sum}
                img={items.img}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontSize: 16,
    color: "black",
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
