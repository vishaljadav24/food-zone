import { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import FeatherIcon from "react-native-vector-icons/Feather";
import Color from "../../../utils/Color";
import Label from "../Label/Label";
import styles from "./InputText.style";

interface InputTextProps extends TextInputProps {
  label: string;
  error?: string;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  isRequired?: boolean;
  isPasswordField?: boolean;
}

/* The code is defining a functional component called `InputText`. It takes in several props: `label`,
`error`, `mt`, `mb`, `mr`, `ml`, and `...props` (which is a rest parameter that allows for passing
any additional props to the component). */
const InputText: React.FC<InputTextProps> = ({
  label,
  error,
  mt,
  mb,
  mr,
  ml,
  isRequired,
  isPasswordField,
  ...props
}) => {
  let stylesArray = [];
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordIconPress = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

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

  const PasswordIcon = isPasswordVisible ? "eye" : "eye-off";
  /* The `return` statement is returning a JSX (JavaScript XML) expression that represents the
  structure and content of the component. */
  return (
    <View style={stylesArray}>
      <Label semiBold mb={8}>
        {label} {isRequired ? <Label color={Color.ERROR}>*</Label> : null}
      </Label>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={[
            styles.input,
            isPasswordField && styles.inputPadding,
            error ? styles.errorInput : null,
          ]}
          underlineColorAndroid="transparent"
          cursorColor={Color.PRIMARY}
          secureTextEntry={isPasswordField && !isPasswordVisible}
        />
        {isPasswordField && (
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={handlePasswordIconPress}
          >
            <FeatherIcon
              name={PasswordIcon}
              size={moderateScale(22)}
              color={Color.TEXT_PRIMARY}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* The code is a conditional rendering statement. It checks if the `error` prop is truthy (i.e.,
     not empty or not false). If it is truthy, it renders a `<Label>` component. The content of the `<Label>`
     component is the value of the `error` prop. If the `error` prop is falsy, this code block is
     not rendered. */}
      {error ? (
        <Label color={Color.ERROR} small>
          {error}
        </Label>
      ) : null}
    </View>
  );
};

/* `InputText.defaultProps` is an object that defines default values for the props of the `InputText`
component. In this case, the default values are an empty string for `label` and `error`, and 0 for
`mt`, `mb`, `ml`, and `mr`. */
InputText.defaultProps = {
  label: "",
  error: "",
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
};

export default InputText;
