import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverview from "../screens/shop/ProductOverview";
import Home from "../screens/Home";
import ProductDetails from "../screens/shop/ProductDetails";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ProductsOverView"
        options={{ title: "All Products" }}
        component={ProductOverview}
      />
      <Stack.Screen
        name="ViewProductDetails"
        component={ProductDetails}
        options={(props: any) => ({ title: props.route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default Myscreens;
