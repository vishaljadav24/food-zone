import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavConstant } from "./Constants";
import { RestaurantItemData } from "../store/types";

export type RootStackParamList = {
  [NavConstant.LOGIN]: undefined;
  [NavConstant.HOME]: undefined;
  [NavConstant.RESTAURANT_DETAILS]: RestaurantItemData;
  [NavConstant.CHCKOUT]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
