import { FlatList } from "react-native";
import Container from "../../components/view/Container/Container";
import { RootStackScreenProps } from "../../navigation/types";
import RestaurantItem, {
  RestaurantItemItemProps,
} from "../../components/view/RestaurantItem/RestaurantItem";
import Label from "../../components/ui/Label/Label";
import { useSelector } from "react-redux";
import { RestaurantsReducer } from "../../store/types";
import { NavConstant } from "../../navigation/Constants";

const Home: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  /* The code `const restaurants = useSelector((state: RestaurantsReducer) => state.restaurants.data);`
  is using the `useSelector` hook from the `react-redux` library to access the `restaurants` data
  from the Redux store. */
  const restaurants = useSelector(
    (state: RestaurantsReducer) => state.restaurants.data
  );
  /**
   * The function `handleRestaurantPress` navigates to the restaurant details screen with the provided
   * data.
   * @param {RestaurantItemItemProps} data - The data parameter is of type RestaurantItemItemProps.
   */
  const handleRestaurantPress = (data: RestaurantItemItemProps) => {
    navigation.navigate(NavConstant.RESTAURANT_DETAILS, data);
  };
  /* The `return` statement is returning the JSX code that will be rendered on the screen. */
  return (
    <Container>
      <Label bold large mb={10}>
        Nearby Restaurants
      </Label>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem {...item} onPress={handleRestaurantPress} />
        )}
        keyExtractor={(item) => item.Id.toString()}
      />
    </Container>
  );
};

export default Home;
