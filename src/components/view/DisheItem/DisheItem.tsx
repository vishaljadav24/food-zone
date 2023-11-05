import { memo, useEffect, useMemo, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import Label from "../../ui/Label/Label";
import styles from "./DisheItem.style";
import Color from "../../../utils/Color";
import { moderateScale } from "react-native-size-matters";
import { DisheItemData, RestaurantsReducer } from "../../../store/types";
import {
  addToCart,
  removeFromCart,
} from "../../../store/slices/restaurantSlice";
import { getFormattedAmount } from "../../../utils/helper";

/* The code block is defining a functional component called `DisheItem` using TypeScript and React. The
component receives props of type `DisheItemData`, which includes properties like `Name`,
`Description`, `Price`, and `Placeholder`. */
const DisheItem: React.FC<DisheItemData> = ({
  Name,
  Description,
  Price,
  Placeholder,
}) => {
  const data = {
    Name,
    Description,
    Price,
    Placeholder,
  };
  const dispatch = useDispatch();
  /* The `useSelector` hook is used to extract data from the Redux store. In this case, it is
  extracting the `cart` property from the `restaurants` slice of the Redux store. The
  `RestaurantsReducer` type is used to specify the shape of the state object. The extracted `cart`
  data will be stored in the `cart` constant. */
  const cart = useSelector(
    (state: RestaurantsReducer) => state.restaurants.cart
  );
  /* The `useMemo` hook is used to memoize the result of a computation. In this case, it is used to
 memoize the value of `itemInCart`. */
  const itemInCart = useMemo(
    () => cart.find((item: DisheItemData) => item.Name === Name),
    [cart]
  );
  const itemCountInCart = itemInCart ? itemInCart.Count : 0;
  const [count, setCount] = useState(itemCountInCart);

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the
`useEffect` hook is used to update the `count` state variable whenever the `cart` state changes. */
  useEffect(() => {
    setCount(itemCountInCart);
  }, [cart]);

  /**
   * The function `handleAddItem` increases the count of an item and dispatches an action to add it to
   * the cart.
   */
  const handleAddItem = () => {
    const newCount = count + 1;
    dispatch(
      addToCart({
        ...data,
        Count: newCount,
      })
    );
    setCount((prevState) => prevState + 1);
  };

  /**
   * The function `handleRemoveItem` decreases the count of an item in the cart and dispatches an action
   * to remove it if the count is greater than 0.
   */
  const handleRemoveItem = () => {
    if (count > 0) {
      const newCount = count - 1;
      dispatch(
        removeFromCart({
          ...data,
          Count: newCount,
        })
      );
      setCount((prevState) => prevState - 1);
    }
  };

  /* The `return` statement in the `DisheItem` component is rendering the JSX code that represents the
visual structure of the component. It returns a `View` component with multiple nested child
components, such as `Image`, `Label`, `TouchableOpacity`, and `Icon`. */
  return (
    <View style={styles.container}>
      <View>
        <Image source={Placeholder} style={styles.image} />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.descContainer}>
          <Label semiBold>{Name}</Label>
          <Label secondary small mt={2} mb={2} numberOfLines={2}>
            {Description}
          </Label>
        </View>
        <View style={styles.footer}>
          <Label bold color={Color.PRIMARY}>
            {getFormattedAmount(Price)}
          </Label>
          <View style={styles.addRemoveContainer}>
            <TouchableOpacity
              style={styles.addRemoveBtn}
              onPress={handleRemoveItem}
            >
              <Icon name="minus" size={moderateScale(12)} />
            </TouchableOpacity>
            <Label mr={10} ml={10} semiBold>
              {count}
            </Label>
            <TouchableOpacity
              style={styles.addRemoveBtn}
              onPress={handleAddItem}
            >
              <Icon name="plus" size={moderateScale(12)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(DisheItem);
