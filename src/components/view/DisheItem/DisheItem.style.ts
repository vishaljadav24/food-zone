import { ScaledSheet } from "react-native-size-matters";
import Color from "../../../utils/Color";

/* The code is exporting a default object that contains a set of styles defined using the
`ScaledSheet.create()` method from the `react-native-size-matters` library. */
export default ScaledSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: "10@ms",
  },
  image: {
    height: "100@ms",
    width: "100@ms",
    borderTopLeftRadius: "10@ms",
    borderBottomLeftRadius: "10@ms",
  },
  subContainer: {
    flex: 1,
    padding: "5@ms",
    borderTopColor: Color.GREY,
    borderRightColor: Color.GREY,
    borderBottomColor: Color.GREY,
    borderTopWidth: "1@ms",
    borderRightWidth: "1@ms",
    borderBottomWidth: "1@ms",
    borderTopRightRadius: "10@ms",
    borderBottomEndRadius: "10@ms",
  },
  addRemoveBtn: {
    height: "20@ms",
    width: "20@ms",
    borderRadius: "3@ms",
    borderColor: Color.GREY,
    borderWidth: "1@ms",
    alignItems: "center",
    justifyContent: "center",
  },
  addRemoveContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descContainer: {
    flex: 1,
  },
});
