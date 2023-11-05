import { ScaledSheet } from "react-native-size-matters";

/* The code is exporting a default object created using the `ScaledSheet.create` method from the
`react-native-size-matters` library. This object contains styles for different components in a React
Native application. */
export default ScaledSheet.create({
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5@vs",
  },
  totalPaymentContainer: {
    marginTop: "8@vs",
  },
  checkoutDetailsContainer: {
    flex: 1,
  },
  paymentBtn: {
    alignSelf: "center",
    marginBottom: "15@vs",
  },
});
