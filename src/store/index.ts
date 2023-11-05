import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

/* The code is creating a Redux store using the `configureStore` function from the `@reduxjs/toolkit`
library. The `configureStore` function takes an object as an argument, with the `reducer` property
specifying the root reducer for the store. In this case, the `rootReducer` is being passed as the
value for the `reducer` property. The resulting store is then assigned to the `store` constant. */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
