import { memo } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./DisheList.style";
import DisheItem from "../DisheItem/DisheItem";
import { DisheItemData } from "../../../store/types";
import Label from "../../ui/Label/Label";

/* The `interface DisheListProps` is defining the shape of the props that the `DisheList` component
expects. It specifies that the component expects a prop called `data` of type
`Array<DisheItemData>`. This means that when using the `DisheList` component, you need to provide an
array of `DisheItemData` objects as the `data` prop. */
interface DisheListProps {
  data: Array<DisheItemData>;
}

/* The code block `const DisheList: React.FC<DisheListProps> = ({ data }) => { ... }` is defining a
functional component called `DisheList` that takes in a prop called `data` of type
`Array<DisheItemData>`. */
const DisheList: React.FC<DisheListProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.length ? (
        <View style={styles.listContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item) => (
              <View key={item.Name}>
                <DisheItem {...item} />
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.empltyList}>
          <Label>No dishes found</Label>
        </View>
      )}
    </View>
  );
};

/* `export default memo(DisheList);` is exporting the `DisheList` component as the default export of
the module. The `memo` function is a higher-order component provided by React that optimizes the
rendering of functional components by memoizing the result. It helps to prevent unnecessary
re-renders of the component when the props haven't changed. */
export default memo(DisheList);
