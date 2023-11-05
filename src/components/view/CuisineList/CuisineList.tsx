import { memo, useState } from "react";
import { FlatList, View } from "react-native";
import CuisineItem from "../CuisineItem/CuisineItem";
import styles from "./CuisineList.style";
import { CuisineItemData } from "../../../store/types";

/* The `CuisineListProps` interface is defining the props that can be passed to the `CuisineList`
component. It has two properties: */
interface CuisineListProps {
  data: Array<CuisineItemData>;
  onSelect: Function;
}

/**
 * The `CuisineList` component is a functional component that displays a list of cuisine items and
 * allows the user to select an item, updating the state and calling a callback function with the
 * selected item's dishes.
 * @param  - - `data`: This is an array of `CuisineItemData` objects. It represents the list of cuisine
 * items to be displayed.
 * @returns The `CuisineList` component is returning a `View` component that contains a `FlatList`
 * component. The `FlatList` component is rendering a list of cuisine items based on the `items` state
 * variable. Each cuisine item is rendered using the `CuisineItem` component, and the `handleOnPress`
 * function is passed as a prop to handle item selection. The `horizontal
 */
const CuisineList: React.FC<CuisineListProps> = ({ data, onSelect }) => {
  /* `const [items, setItems] = useState(data);` is initializing a state variable called `items` with
  the initial value of `data`. The `useState` hook is a built-in React hook that allows functional
  components to have state. It returns an array with two elements: the current state value (`items`)
  and a function to update the state (`setItems`). In this case, `items` is being used to store the
  current list of cuisine items. */
  const [items, setItems] = useState(data);

  /**
   * The handleOnPress function updates the state of items and calls the onSelect function with the
   * selected item's dishes.
   * @param {CuisineItemData} item - The "item" parameter is of type "CuisineItemData".
   */
  const handleOnPress = (item: CuisineItemData) => {
    setItems((prevItems) =>
      prevItems.map((cuisine) => {
        return {
          ...cuisine,
          IsActive: cuisine.Name === item.Name,
        };
      })
    );
    onSelect(item.Dishes);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CuisineItem onPress={handleOnPress} {...item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(CuisineList);
