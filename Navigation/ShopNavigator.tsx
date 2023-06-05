import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverview from "../screens/shop/ProductOverview";
import Home from "../screens/Home";
import ProductDetails from "../screens/shop/ProductDetails";
import ICON from "react-native-vector-icons/FontAwesome5Pro";
import { TouchableOpacity } from "react-native";
import Cart from "../screens/shop/Cart";

const Stack = createNativeStackNavigator();
const Myscreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <ICON name="shopify" size={35} color={"white"} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ProductsOverView"
        options={({ navigation }) => ({
          title: "All Products",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <ICON name="shopify" size={35} color={"white"} />
            </TouchableOpacity>
          ),
        })}
        component={ProductOverview}
      />
      <Stack.Screen
        name="ViewProductDetails"
        component={ProductDetails}
        options={(props: any) => ({ title: props.route.params.title })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitle: "My Cart" }}
      />
    </Stack.Navigator>
  );
};

export default Myscreens;
