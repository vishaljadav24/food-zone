import React from "react";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import AppRouter from "./src/navigation/AppRouter";
import store from "./src/store";

/**
 * The App function returns a JSX element that wraps the AppRouter component and the Toast component
 * with a Provider component.
 * @returns a JSX element.
 */
function App(): JSX.Element {
  return (
    /* The `<Provider>` component is a part of the Redux library in React. It is used to provide the
    Redux store to all components in the application. The `store` prop is passed to the `<Provider>`
    component, which contains the application's state and logic. */
    <Provider store={store}>
      {/* `<AppRouter />` is a component that handles the navigation logic of the application. It is
      responsible for rendering the appropriate screens based on the current navigation state. */}
      <AppRouter />
      {/* The `<Toast topOffset={50} />` component is rendering a toast message component from the
      `react-native-toast-message` library. The `topOffset` prop is used to specify the distance
      from the top of the screen where the toast message should be displayed. In this case, the
      toast message will be displayed 50 pixels from the top of the screen. */}
      <Toast topOffset={50} />
    </Provider>
  );
}

export default App;
