import { ScaledSheet } from "react-native-size-matters";
import Color from "../../../utils/Color";

/* The code is exporting a JavaScript object that contains a style sheet created using the
`ScaledSheet.create()` method. */
export default ScaledSheet.create({
  container: {
    backgroundColor: Color.PRIMARY,
    borderRadius: "20@ms",
    alignItems: "center",
    justifyContent: "center",
    height: "40@ms",
    width: "220@ms",
  },
  pressed: {
    backgroundColor: Color.BLACK_LIGHT,
  },
});
