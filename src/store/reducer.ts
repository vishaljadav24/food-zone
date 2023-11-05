import { combineReducers } from "@reduxjs/toolkit";
import restaurantSlice from "./slices/restaurantSlice";

/* The code is creating a root reducer using the `combineReducers` function from the `@reduxjs/toolkit`
library. The `combineReducers` function is used to combine multiple reducers into a single reducer
function. */
const rootReducer = combineReducers({
  restaurants: restaurantSlice,
});

export default rootReducer;
