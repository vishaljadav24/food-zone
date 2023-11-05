import { Image, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/view/Container/Container";
import { RootStackScreenProps } from "../../navigation/types";
import styles from "./RestaurantDetails.style";
import RestauantFooterDetails from "../../components/view/RestauantFooterDetails/RestauantFooterDetails";
import CuisineList from "../../components/view/CuisineList/CuisineList";
import DisheList from "../../components/view/DisheList/DisheList";
import Label from "../../components/ui/Label/Label";
import Color from "../../utils/Color";
import { deleteCart } from "../../store/slices/restaurantSlice";
import { NavConstant } from "../../navigation/Constants";
import { getFormattedAmount } from "../../utils/helper";
import { DisheItemData, RestaurantsReducer } from "../../store/types";

const RestaurantDetails: React.FC<
  RootStackScreenProps<"Restaurant Details">
> = ({ route, navigation }) => {
  const dispatch = useDispatch();
  /* The `const totalDishAddedToCart` is using the `useSelector` hook from the `react-redux` library to
  select the `totalDishAddedToCart` value from the Redux store. It is accessing the
  `totalDishAddedToCart` property from the `restaurants` slice of the Redux store's state, which is
  defined in the `RestaurantsReducer` type. This value represents the total number of dishes that
  have been added to the cart. */
  const totalDishAddedToCart = useSelector(
    (state: RestaurantsReducer) => state.restaurants.totalDishAddedToCart
  );
  /* The `const totalCartAmount` is using the `useSelector` hook from the `react-redux` library to
  select the `totalCartAmount` value from the Redux store. It is accessing the `totalCartAmount`
  property from the `restaurants` slice of the Redux store's state, which is defined in the
  `RestaurantsReducer` type. This value represents the total amount of the cart, which is the sum of
  the prices of all the dishes added to the cart. */
  const totalCartAmount = useSelector(
    (state: RestaurantsReducer) => state.restaurants.totalCartAmount
  );
  const { Placeholder, Cuisines } = route.params;
  const [dishes, setDishes] = useState<Array<DisheItemData>>([]);

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
 `useEffect` hook is used to clean up the cart by deleting all the items in it when the component is
 unmounted. */
  useEffect(() => {
    return () => {
      dispatch(deleteCart());
    };
  }, []);

  /**
   * The function "handleSelectCuisine" sets the "dishes" state with the provided data.
   * @param data - An array of objects representing dish items. Each object should have the following
   * properties:
   */
  const handleSelectCuisine = (data: Array<DisheItemData>) => {
    setDishes(data);
  };

  /**
   * The function handleCheckoutPress navigates to the checkout screen.
   */
  const handleCheckoutPress = () => {
    navigation.navigate(NavConstant.CHCKOUT);
  };

  /* The `return` statement in the code is returning the JSX (JavaScript XML) code that represents the
structure and content of the component's rendered output. */
  return (
    <>
      <Image source={Placeholder} style={styles.headerImage} />
      <Container>
        <View style={{ flex: 1 }}>
          <RestauantFooterDetails {...route.params} />
          <CuisineList data={Cuisines} onSelect={handleSelectCuisine} />
          <DisheList data={dishes} />
        </View>
        {totalDishAddedToCart > 0 && (
          <TouchableOpacity
            style={styles.checkoutContainer}
            onPress={handleCheckoutPress}
          >
            <View style={styles.totalCartCountContainer}>
              <Label
                large
                color={Color.WHITE}
                bold
              >{`x${totalDishAddedToCart}`}</Label>
              <Label
                color={Color.WHITE}
                bold
                ml={20}
                style={styles.amountLabel}
              >
                {getFormattedAmount(totalCartAmount)}
              </Label>
              <Label large bold color={Color.WHITE}>
                Checkout
              </Label>
            </View>
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
};

export default RestaurantDetails;
