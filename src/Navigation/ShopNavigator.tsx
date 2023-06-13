import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverview from "../screens/shop/ProductOverview";
import Home from "../screens/Home";
import ProductDetails from "../screens/shop/ProductDetails";
import ICON from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import Cart from "../screens/shop/Cart";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyOrders from "../screens/shop/Orders";
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import UserProduct from "../screens/users/UserProduct";
import EditProduct from "../screens/users/EditProduct";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

const Myscreens = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          >
            <ICON name="bars" size={25} color={"white"} />
          </TouchableOpacity>
        ),
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

const Adminnav = (props: any) => {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen
        name="User Products"
        component={UserProduct}
        options={({ navigation, route }) => ({
          headerShown: true,
          title: "User Products",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <ICON
                name="bars"
                size={25}
                color={"white"}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditProducts");
              }}
            >
              <ICON
                name="edit"
                size={25}
                color={"white"}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        })}
      ></AdminStack.Screen>
      <AdminStack.Screen
        name="EditProducts"
        component={EditProduct}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          title: route.params ? "Edit Product" : "Add product",
        })}
      ></AdminStack.Screen>
    </AdminStack.Navigator>
  );
};

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      useLegacyImplementation={true}
    >
      <Drawer.Screen name="Homepage" component={Myscreens} />
      <Drawer.Screen
        name="Orders"
        options={({ navigation }) => ({
          headerShown: true,
          title: "My Orders",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <ICON
                name="bars"
                size={25}
                color={"white"}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        })}
        component={MyOrders}
      />
      <Drawer.Screen name="Admin" component={Adminnav} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
