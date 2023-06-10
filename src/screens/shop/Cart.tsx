import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  useColorScheme,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-duck/store";
import MyCart from "../../components/shop/MyCart";
import { DataTable } from "react-native-paper";
import ICON from "react-native-vector-icons/FontAwesome";
import { deleteAll, deletefromcart } from "../../redux-duck/slices/cartSlice";
import { placeorders } from "../../redux-duck/slices/ordersSlice";

const Cart = () => {
  const onCartProducts = useSelector((state: RootState) => {
    const array = [];
    for (const key in state.cartItems.items) {
      array.push({
        productID: key,
        productTitle: state.cartItems.items[key].productTitle,
        productPrice: state.cartItems.items[key].productPrice,
        quantity: state.cartItems.items[key].quantity,
        sum: state.cartItems.items[key].sum,
        img: state.cartItems.items[key].image,
      });
    }
    return array;
  });

  const isDarkMode = useColorScheme() === "dark";
  const dispatch = useDispatch();

  const totalAmmount = useSelector(
    (state: RootState) => state.cartItems.totalAmmount
  );

  return (
    <View style={Styles.screen}>
      {onCartProducts.length === 0 ? (
        <View style={Styles.nodata}>
          <Text
            style={[
              Styles.nodat,
              {
                color: "black",
              },
            ]}
          >
            No any items in your Cart
          </Text>
        </View>
      ) : (
        <View>
          <View style={Styles.flacon}>
            <FlatList
              data={onCartProducts}
              keyExtractor={(item) => item.productID}
              renderItem={({ item }) => (
                <MyCart
                  id={item.productID}
                  productTitle={item.productTitle}
                  productPrice={item.productPrice}
                  quantity={item.quantity}
                  sum={item.sum}
                  img={item.img}
                />
              )}
            />
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 2,
                marginTop: 10,
              }}
            />
          </View>
          <ScrollView>
            <View style={Styles.summary}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "800", color: "purple" }}
                >
                  Summary
                </Text>
              </View>
              <View>
                <View>
                  <DataTable style={Styles.datatable}>
                    <DataTable.Header collapsable={true}>
                      <DataTable.Title style={{ justifyContent: "center" }}>
                        <Text style={Styles.title}>Title</Text>
                      </DataTable.Title>
                      <DataTable.Title style={{ justifyContent: "center" }}>
                        <Text style={Styles.title}>Quantity</Text>
                      </DataTable.Title>
                      <DataTable.Title style={{ justifyContent: "center" }}>
                        <Text style={Styles.title}>Price</Text>
                      </DataTable.Title>
                      <DataTable.Title style={{ justifyContent: "center" }}>
                        <Text style={Styles.title}>Action</Text>
                      </DataTable.Title>
                    </DataTable.Header>
                    {onCartProducts.map((product) => (
                      <DataTable.Row key={product.productID}>
                        <DataTable.Cell
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          {product.productTitle}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: "center" }}>
                          {product.quantity}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: "center" }}>
                          {product.sum}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: "center" }}>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(deletefromcart(product));
                            }}
                            style={{ paddingRight: 15 }}
                          >
                            <ICON name="minus" size={20} color={"purple"} />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(deletefromcart(product));
                            }}
                          >
                            <ICON name="plus" size={20} color={"purple"} />
                          </TouchableOpacity>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </View>
                <Text style={Styles.txt2}>Total Price : {totalAmmount}</Text>
                <Button
                  title="Order Now"
                  onPress={() => {
                    dispatch(deleteAll(null));
                    dispatch(placeorders({ onCartProducts, totalAmmount }));
                    setTimeout(() => {
                      ToastAndroid.show(
                        "Plese Go to My Order Page",
                        ToastAndroid.LONG
                      );
                    }, 1500);
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flacon: {
    height: 290,
  },

  datatable: {
    width: "100%",
    marginTop: 10,
    columnGap: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  nodata: {
    marginVertical: "50%",
    alignItems: "center",
  },
  nodat: {
    fontSize: 20,
    fontWeight: "400",
  },
  summary: {
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
    // height: 300,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  txt2: {
    color: "purple",
    fontSize: 18,
    marginLeft: "40%",
    marginTop: 10,
  },
  orderbtn: {
    backgroundColor: "purple",
    height: 50,
    width: 70,
    color: "white",
  },
});
export default Cart;
