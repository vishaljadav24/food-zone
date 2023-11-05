import { ImageSourcePropType } from "react-native";

export interface RestaurantReducerInitialState {
  data: Array<RestaurantItemData>;
  cart: Array<DisheItemData>;
  totalDishAddedToCart: number;
  totalCartAmount: number;
}

/* The `DisheItemData` interface is defining the structure of an object that represents a dish item. It
has the following properties: */
export interface DisheItemData {
  Name: string;
  Description: string;
  Price: number;
  Placeholder: ImageSourcePropType;
  Count: number;
}

/* The `CuisineItemData` interface is defining the structure of an object that represents a cuisine
item. It has three properties: */
export interface CuisineItemData {
  Name: string;
  IsActive: boolean;
  Dishes?: Array<DisheItemData>;
}

/* The `RestaurantItemData` interface is defining the structure of an object that represents a
restaurant item. It has several properties: */
export interface RestaurantItemData {
  Id: number;
  Name: string;
  Distance: string;
  Rating: string;
  RatingCount: string;
  FavoriteFlag: boolean;
  Placeholder: ImageSourcePropType;
  Cuisines: Array<CuisineItemData>;
}

/* The `export interface RestaurantsReducer` is defining the structure of an object that represents the
state of the restaurants in a Redux store. It has one property called `restaurants`, which is of
type `RestaurantData`. This allows for organizing and accessing the restaurant data in a structured
manner within the Redux store. */
export interface RestaurantsReducer {
  restaurants: RestaurantReducerInitialState;
}
