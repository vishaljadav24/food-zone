import { memo } from "react";
import { TouchableOpacity } from "react-native";
import Label from "../../ui/Label/Label";
import styles from "./CuisineItem.style";
import Color from "../../../utils/Color";
import { CuisineItemData } from "../../../store/types";
/* The `CuisineItemProps` interface is extending the `CuisineItemData` interface and adding two
additional properties: `IsActive` and `onPress`. */

interface CuisineItemProps extends CuisineItemData {
  IsActive: boolean;
  onPress: Function;
}

/**
 * The `CuisineItem` component is a clickable item that displays the name of a cuisine and calls a
 * function when pressed.
 */
const CuisineItem: React.FC<CuisineItemProps> = ({
  Name,
  Dishes,
  IsActive,
  onPress,
}) => {
  /**
   * The function `handlePress` calls the `onPress` function with the `Name` and `Dishes` as arguments,
   * if `onPress` is defined.
   */
  const handlePress = () => {
    if (onPress) {
      onPress({
        Name,
        Dishes,
      });
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, IsActive && styles.activeItem]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Label
        color={IsActive ? Color.WHITE : Color.TEXT_PRIMARY}
        bold={IsActive}
      >
        {Name}
      </Label>
    </TouchableOpacity>
  );
};

/* `export default memo(CuisineItem);` is exporting the `CuisineItem` component as the default export
of the module, after applying the `memo` higher-order component to it. */
export default memo(CuisineItem);
