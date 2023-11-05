import { ScaledSheet } from "react-native-size-matters";
import Color from "../../utils/Color";

export default ScaledSheet.create({
  headerImage: {
    height: "150@vs",
    width: "100%",
  },
  checkoutContainer: {
    // position: "absolute",
    // bottom: "50@ms",
    // left: "10@ms",
    // right: "10@ms",
  },
  totalCartCountContainer: {
    height: "40@ms",
    backgroundColor: Color.PRIMARY,
    borderRadius: "20@ms",
    paddingHorizontal: "10@ms",
    flexDirection: "row",
    alignItems: "center",
  },
  amountLabel: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
