import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerConfig } from "./Navigation.style";
import Color from "../utils/Color";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import RestaurantDetails from "../screens/RestaurantDetails/RestaurantDetails";
import { NavConstant } from "./Constants";
import Checkout from "../screens/Checkout/Checkout";
import { RootStackParamList, RootStackScreenProps } from "./types";

/* The line `const Stack = createNativeStackNavigator<RootStackParamList>();` is creating a stack
navigator using the `createNativeStackNavigator` function from the React Navigation library. The
`RootStackParamList` type is passed as a generic parameter to define the types of the route
parameters for the stack navigator. This allows for type checking and autocompletion when accessing
route parameters in the screens of the stack navigator. */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The AppRouter function returns a navigation container with multiple screens for login, home,
 * restaurant details, and checkout.
 * @returns The AppRouter component is returning a NavigationContainer component from the React
 * Navigation library. Inside the NavigationContainer, there is a StatusBar component, followed by a
 * Stack.Navigator component. Inside the Stack.Navigator, there are multiple Stack.Screen components,
 * each representing a different screen in the app. The screens include Login, Home, RestaurantDetails,
 * and Checkout. Each Stack.Screen component has its own set of options for configuring
 */
const AppRouter = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={Color.PRIMARY} />
      <Stack.Navigator>
        <Stack.Screen
          name={NavConstant.LOGIN}
          component={Login}
          options={{
            ...headerConfig,
          }}
        />
        <Stack.Screen
          name={NavConstant.HOME}
          component={Home}
          options={{
            ...headerConfig,
          }}
        />
        <Stack.Screen
          name={NavConstant.RESTAURANT_DETAILS}
          component={RestaurantDetails}
          options={({ route }: RootStackScreenProps<"Restaurant Details">) => ({
            ...headerConfig,
            title: route.params ? route.params.Name : "",
          })}
        />
        <Stack.Screen
          name={NavConstant.CHCKOUT}
          component={Checkout}
          options={{
            ...headerConfig,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
