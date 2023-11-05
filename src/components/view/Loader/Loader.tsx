import { memo } from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./Loader.style";
import Color from "../../../utils/Color";

/* The `interface LoaderProps` is defining the type of the props that the `Loader` component expects.
In this case, it specifies that the `visible` prop should be a boolean value. */
interface LoaderProps {
  visible: boolean;
}

/**
 * The Loader component is a React functional component that displays an activity indicator when the
 * "visible" prop is true.
 * @param  - The above code defines a React functional component called `Loader` that takes a single
 * prop called `visible`.
 * @returns The Loader component is being returned. If the `visible` prop is `false`, `null` is
 * returned instead.
 */
const Loader: React.FC<LoaderProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Color.PRIMARY} />
    </View>
  );
};

export default memo(Loader);
