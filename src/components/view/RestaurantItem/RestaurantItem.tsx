import { memo, useCallback } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import styles from "./RestaurantItem.style";
import Label from "../../ui/Label/Label";
import { RestaurantItemData } from "../../../store/types";
import RestauantFooterDetails from "../RestauantFooterDetails/RestauantFooterDetails";

/* The `export interface RestaurantItemItemProps extends RestaurantItemData` is creating an interface
`RestaurantItemItemProps` that extends the `RestaurantItemData` interface. This means that
`RestaurantItemItemProps` will have all the properties of `RestaurantItemData`, and it can also have
an additional optional property `onPress` of type `Function`. */
export interface RestaurantItemItemProps extends RestaurantItemData {
  onPress?: Function;
}

/**
 * The `RestaurantItem` component is a TypeScript React component that renders a restaurant item with
 * its details and handles the onPress event.
 * @param  - - Id: The unique identifier of the restaurant item.
 * @returns The `RestaurantItem` component is being returned.
 */
const RestaurantItem: React.FC<RestaurantItemItemProps> = ({
  Id,
  Name,
  Distance,
  Rating,
  RatingCount,
  FavoriteFlag,
  Placeholder,
  Cuisines,
  onPress,
}) => {
  const data = {
    Id,
    Name,
    Distance,
    Rating,
    RatingCount,
    FavoriteFlag,
    Placeholder,
    Cuisines,
  };

  /* The `handleOnPress` function is a callback function that is created using the `useCallback` hook.
 It is used to handle the onPress event of the TouchableOpacity component. */
  const handleOnPress = useCallback(() => {
    if (onPress) {
      onPress(data);
    }
  }, [onPress]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handleOnPress}
    >
      <ImageBackground source={Placeholder} style={styles.image} />
      <View style={styles.subContainer}>
        <Label semiBold mb={5}>
          {Name}
        </Label>
        <RestauantFooterDetails {...data} />
      </View>
    </TouchableOpacity>
  );
};

/* `export default memo(RestaurantItem);` is exporting the `RestaurantItem` component as the default
export of the module. The `memo` function is a higher-order component provided by React that
optimizes the rendering of functional components by memoizing the component's props and only
re-rendering when the props change. By wrapping the `RestaurantItem` component with `memo`, it
ensures that the component will only re-render if its props have changed, improving performance. */
export default memo(RestaurantItem);
