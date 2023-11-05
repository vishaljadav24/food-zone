import { ScaledSheet } from "react-native-size-matters";
import Color from "../../../utils/Color";

/* The code is exporting a JavaScript object that contains styles for an input component. The styles
are created using the `ScaledSheet.create()` method from the `react-native-size-matters` library. */
export default ScaledSheet.create({
  inputContainer: {
    justifyContent: "center",
  },
  input: {
    borderColor: Color.GREY,
    borderWidth: "1@ms",
    borderRadius: "8@ms",
    padding: "10@ms",
    fontSize: "15@ms",
    includeFontPadding: false,
    color: Color.TEXT_PRIMARY,
  },
  inputPadding: {
    paddingRight: "38@ms",
  },
  errorInput: {
    borderColor: Color.ERROR,
  },
  passwordIcon: {
    position: "absolute",
    right: "8@s",
  },
});
