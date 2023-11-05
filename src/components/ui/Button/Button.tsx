import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import Label from "../Label/Label";
import styles from "./Button.style";
import { moderateScale } from "react-native-size-matters";
import Color from "../../../utils/Color";

interface ButtonProps extends PressableProps {
  label: string;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * The `Button` component is a reusable button component in JavaScript React that allows for
 * dynamically setting margin values based on provided props.
 * @returns The code is returning a JSX element. It is rendering a `Pressable` component with the
 * provided props. Inside the `Pressable` component, there is a `Label` component with the `semiBold`
 * prop, and the `label` prop is passed as the child of the `Label` component.
 */
const Button: React.FC<ButtonProps> = ({
  label,
  mt,
  mb,
  mr,
  ml,
  style,
  ...props
}) => {
  /* The code is creating an empty array called `stylesArray`. It then pushes an object into the array,
 which contains four properties: `marginTop`, `marginBottom`, `marginLeft`, and `marginRight`. The
 values of these properties are calculated using the `moderateScale` function with the values of
 `mt`, `mb`, `ml`, and `mr` respectively. This allows for dynamically setting the margin values of
 the component based on the provided props. */
  let stylesArray: Array<ViewStyle> = [];
  /* The code block is checking the values of the `mt`, `mb`, `ml`, and `mr` props. If any of these
  props have a truthy value, it pushes an object into the `stylesArray` array with the corresponding
  margin property (`marginTop`, `marginBottom`, `marginLeft`, `marginRight`) set to the result of
  calling the `moderateScale` function with the value of the prop as an argument. This allows for
  easy customization of the margins of the `Text` component rendered by the `Label` component. */
  if (mt)
    stylesArray.push({
      marginTop: moderateScale(mt),
    });
  if (mb)
    stylesArray.push({
      marginBottom: moderateScale(mb),
    });
  if (ml)
    stylesArray.push({
      marginLeft: moderateScale(ml),
    });
  if (mr)
    stylesArray.push({
      marginRight: moderateScale(mr),
    });
  /* The `return` statement is returning a JSX element. It is rendering a `Pressable` component with the
 following props: */
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        stylesArray,
        style,
      ]}
      {...props}
    >
      <Label semiBold color={Color.WHITE}>
        {label}
      </Label>
    </Pressable>
  );
};

/* `Button.defaultProps` is an object that defines default values for the props of the `Button`
component. In this case, it sets the default values for the `label`, `mt`, `mb`, `ml`, and `mr`
props. If these props are not provided when using the `Button` component, their default values will
be used instead. For example, if no `label` prop is provided, the `label` prop will default to an
empty string. Similarly, if no `mt`, `mb`, `ml`, or `mr` props are provided, they will default to 0. */
Button.defaultProps = {
  label: "",
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
};

export default Button;
