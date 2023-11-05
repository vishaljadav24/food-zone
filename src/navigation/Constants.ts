/* The code is exporting a constant object called `NavConstant` with four properties: `LOGIN`, `HOME`,
`RESTAURANT_DETAILS`, and `CHCKOUT`. Each property is assigned a string value. The `as const`
assertion is used to infer and preserve the specific string literal types for each property value. */
export const NavConstant = {
  LOGIN: "Login",
  HOME: "Home",
  RESTAURANT_DETAILS: "Restaurant Details",
  CHCKOUT: "Checkout",
} as const;
