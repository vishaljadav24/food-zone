import { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Color from "../../../utils/Color";

interface LabelProps extends TextProps {
  small?: boolean;
  large?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  secondary?: boolean;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  align?: "auto" | "left" | "right" | "center" | "justify";
  fontSize?: number;
  color?: string;
  children: string | ReactNode;
  style?: StyleProp<TextStyle>;
}

/**
 * The `Label` component in JavaScript React is a customizable text component that accepts various
 * props to style the text.
 * @returns The code is returning a `Text` component with the props and children passed to the `Label`
 * component. The `Text` component has the following props:
 */
const Label: React.FC<LabelProps> = ({
  small,
  large,
  semiBold,
  bold,
  secondary,
  mt,
  mb,
  mr,
  ml,
  align,
  fontSize,
  color,
  children,
  style,
  ...props
}) => {
  let stylesArray: Array<StyleProp<TextStyle>> = [];

  /* This code block is checking the values of the `small` and `large` props. If the `small` prop is
 truthy, it pushes an object into the `stylesArray` array with a `fontSize` property set to
 `moderateScale(12)`. If the `large` prop is truthy, it pushes an object into the `stylesArray`
 array with a `fontSize` property set to `moderateScale(17)`. If neither `small` nor `large` is
 truthy, it pushes an object into the `stylesArray` array with a `fontSize` property set to
 `moderateScale(15)`. */
  if (small)
    stylesArray.push({
      fontSize: moderateScale(12),
    });
  else if (large)
    stylesArray.push({
      fontSize: moderateScale(17),
    });
  else if (fontSize) {
    stylesArray.push({
      fontSize: moderateScale(fontSize),
    });
  } else
    stylesArray.push({
      fontSize: moderateScale(15),
    });

  /* The code block is checking the values of the `semiBold` and `bold` props. */
  if (semiBold)
    stylesArray.push({
      fontFamily: "OpenSans-SemiBold",
    });
  else if (bold)
    stylesArray.push({
      fontFamily: "OpenSans-Bold",
    });
  else
    stylesArray.push({
      fontFamily: "OpenSans-Regular",
    });

  /* The code block is pushing an object into the `stylesArray` array. This object contains various
style properties for the `Text` component. */
  stylesArray.push({
    color: secondary ? Color.TEXT_SECONDARY : color,
    textAlign: align,
  });

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

  /* `Pushing the `style` prop into the `stylesArray` array. This allows the `style` prop to 
  override any existing styles in the array. */
  if (style) stylesArray.push(style);

  /* The `return` statement is returning a `Text` component with the following props and children: */
  return (
    <Text {...props} style={stylesArray}>
      {children}
    </Text>
  );
};

/* The `Label.defaultProps` object is setting default values for the props of the `Label` component. If
any of these props are not provided when using the `Label` component, the default values specified
in `Label.defaultProps` will be used instead. */
Label.defaultProps = {
  small: false,
  large: false,
  bold: false,
  semiBold: false,
  color: Color.TEXT_PRIMARY,
  align: "left",
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  fontSize: 15,
  secondary: false,
};

export default Label;
