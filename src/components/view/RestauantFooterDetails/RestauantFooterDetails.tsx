import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./RestaurantItem.style";
import Label from "../../ui/Label/Label";
import Color from "../../../utils/Color";
import { RestaurantItemData } from "../../../store/types";

/**
 * The `RestauantFooterDetails` function is a React component that displays details about a restaurant,
 * including distance, rating, and a favorite icon.
 * @param  - - `Distance`: The distance of the restaurant from the user's location.
 * @returns The `RestauantFooterDetails` component is returning a JSX element. It consists of a `View`
 * component with styles applied using the `styles.footer` object. Inside the `View`, there is another
 * `View` component with styles applied using the `styles.detailsContainer` object. Inside this `View`,
 * there are two `Label` components displaying the `Distance` and `Rating` information
 */
const RestauantFooterDetails: React.FC<RestaurantItemData> = ({
  Distance,
  Rating,
  RatingCount,
  FavoriteFlag,
}) => {
  /* The line `const FavoriteIcon = FavoriteFlag ? "heart" : "heart-outline";` is assigning the value
  of "heart" to the variable `FavoriteIcon` if `FavoriteFlag` is true, and assigning the value of
  "heart-outline" if `FavoriteFlag` is false. This is a conditional assignment using the ternary
  operator. */
  const FavoriteIcon = FavoriteFlag ? "heart" : "heart-outline";
  return (
    <View style={styles.footer}>
      <View style={styles.detailsContainer}>
        <Label secondary small>
          {Distance}
        </Label>
        <Label small secondary ml={5} mr={5}>
          |
        </Label>
        <Icon name="star" color={Color.YELLOW} size={moderateScale(15)} />
        <Label small secondary ml={1}>
          {Rating}
          {` (${RatingCount})`}
        </Label>
      </View>
      <TouchableOpacity>
        <Icon name={FavoriteIcon} color={Color.RED} size={moderateScale(18)} />
      </TouchableOpacity>
    </View>
  );
};

/* `export default memo(RestauantFooterDetails);` is exporting the component `RestauantFooterDetails`
as the default export of the module. The `memo` function is a higher-order component provided by
React that optimizes the rendering of functional components by memoizing the result. It helps to
prevent unnecessary re-renders of the component when its props have not changed. */
export default memo(RestauantFooterDetails);
