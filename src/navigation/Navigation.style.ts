import { moderateScale } from "react-native-size-matters";
import Color from "../utils/Color";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types";

/* The code is exporting an object named `headerConfig`. This object contains various properties that
define the configuration for a header component in a React Native application. */
export const headerConfig: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.PRIMARY,
  },
  headerTintColor: Color.WHITE,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "OpenSans-Bold",
    fontSize: moderateScale(15),
  },
  headerBackTitleVisible: false,
};
