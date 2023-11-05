import { AppContants } from "./constants";

/**
 * The function `getFormattedAmount` takes a number as input and returns a formatted currency string in
 * Indian Rupees (INR) using the `toLocaleString` method.
 * @param {number} amount - The `amount` parameter is a number that represents a monetary value.
 * @returns The function `getFormattedAmount` returns a formatted string representation of the `amount`
 * parameter, using the Indian Rupee (INR) currency format. If the `amount` is provided and is a valid
 * number, it will be formatted using the `toLocaleString` method with the specified options. If the
 * `amount` is not provided or is not a valid number, it will return a formatted
 */
export const getFormattedAmount = (amount: number) => {
  if (amount)
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  return Number(0).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};

/**
 * The function calculates the total payment amount by adding the given amount with various constants.
 * @param {number} amount - The `amount` parameter represents the total payment amount before adding
 * additional fees and charges.
 * @returns the total payment amount, which is calculated by adding the input amount with the values of
 * AppContants.DeliveryFee, AppContants.GSTAndRestaurantCharges, and AppContants.PlatFormFee.
 */
export const getTotalPaymentAmount = (amount: number) => {
  return (
    amount +
    AppContants.DeliveryFee +
    AppContants.GSTAndRestaurantCharges +
    AppContants.PlatFormFee
  );
};
