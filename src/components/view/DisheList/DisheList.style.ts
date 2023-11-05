import { ScaledSheet } from "react-native-size-matters";

/* The code is exporting a default object created using the `ScaledSheet.create` method from the
`react-native-size-matters` library. This object contains styles for different components in a React
Native application. */
export default ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: "15@ms",
  },
  listContainer: {
    flex: 1,
  },
  empltyList: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
