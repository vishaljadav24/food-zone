import { ScaledSheet } from "react-native-size-matters";
import Color from "../../../utils/Color";

/* The code is exporting a JavaScript object that contains a set of styles defined using the
`ScaledSheet.create()` method from the `react-native-size-matters` library. */
export default ScaledSheet.create({
  container: {
    marginBottom: "10@vs",
  },
  subContainer: {
    padding: "8@ms",
    borderTopColor: "transparent",
    borderBottomColor: Color.GREY,
    borderStartColor: Color.GREY,
    borderEndColor: Color.GREY,
    borderWidth: "1@ms",
    borderBottomStartRadius: "5@ms",
    borderBottomEndRadius: "5@ms",
  },
  image: {
    height: "100@vs",
    overflow: "hidden",
    borderTopStartRadius: "5@ms",
    borderTopEndRadius: "5@ms",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
