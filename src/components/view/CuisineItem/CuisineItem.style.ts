import { ScaledSheet } from "react-native-size-matters";
import Color from "../../../utils/Color";

/* The code is exporting a default object created using the `ScaledSheet.create()` method. This method
is used to create a stylesheet object with scaled values for dimensions and font sizes. */
export default ScaledSheet.create({
  container: {
    paddingHorizontal: "15@ms",
    backgroundColor: Color.GREY,
    borderRadius: "30@ms",
    marginRight: "10@s",
    height: "30@ms",
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    backgroundColor: Color.PRIMARY,
  },
});
