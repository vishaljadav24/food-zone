import { useSelector } from "react-redux";
import Label from "../../components/ui/Label/Label";
import Container from "../../components/view/Container/Container";
import { RootStackScreenProps } from "../../navigation/types";
import styles from "./Checkout.style";
import DisheList from "../../components/view/DisheList/DisheList";
import { getFormattedAmount, getTotalPaymentAmount } from "../../utils/helper";
import { ScrollView, View } from "react-native";
import { AppContants } from "../../utils/constants";
import Button from "../../components/ui/Button/Button";
import { RestaurantsReducer } from "../../store/types";

const Checkout: React.FC<RootStackScreenProps<"Checkout">> = () => {
  /* The code `const cart = useSelector((state: RestaurantsReducer) => state.restaurants.cart);` is using
the `useSelector` hook from the `react-redux` library to access the `cart` property from the
`restaurants` slice of the Redux store. It is retrieving the cart items from the Redux store and
assigning them to the `cart` variable. */
  const cart = useSelector(
    (state: RestaurantsReducer) => state.restaurants.cart
  );
  /* The code `const totalCartAmount = useSelector((state: RestaurantsReducer) =>
  state.restaurants.totalCartAmount);` is using the `useSelector` hook from the `react-redux`
  library to access the `totalCartAmount` property from the `restaurants` slice of the Redux store. */
  const totalCartAmount = useSelector(
    (state: RestaurantsReducer) => state.restaurants.totalCartAmount
  );
  /* The code is rendering the JSX elements that make up the UI for the Checkout component. */
  return (
    <Container>
      <ScrollView>
        <DisheList data={cart} />
        <View style={styles.checkoutDetailsContainer}>
          <Label semiBold large mt={20} mb={10}>
            Checkout Details
          </Label>
          <View style={styles.amountContainer}>
            <Label secondary small>
              Item Total
            </Label>
            <Label small>{getFormattedAmount(totalCartAmount)}</Label>
          </View>
          <View style={styles.amountContainer}>
            <Label secondary small>
              Delivery Fee
            </Label>
            <Label small>{getFormattedAmount(AppContants.DeliveryFee)}</Label>
          </View>
          <View style={styles.amountContainer}>
            <Label secondary small>
              Platform Fee
            </Label>
            <Label small>{getFormattedAmount(AppContants.PlatFormFee)}</Label>
          </View>
          <View style={styles.amountContainer}>
            <Label secondary small>
              GST and Restaurant Charges
            </Label>
            <Label small>
              {getFormattedAmount(AppContants.GSTAndRestaurantCharges)}
            </Label>
          </View>
          <View style={[styles.amountContainer, styles.totalPaymentContainer]}>
            <Label bold>Total Payment</Label>
            <Label bold>
              {getFormattedAmount(getTotalPaymentAmount(totalCartAmount))}
            </Label>
          </View>
        </View>
        <Button mt={20} label="Pyament" style={styles.paymentBtn} />
      </ScrollView>
    </Container>
  );
};

export default Checkout;
