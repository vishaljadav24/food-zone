import auth from "@react-native-firebase/auth";
import Toast from "react-native-toast-message";
import Container from "../../components/view/Container/Container";
import InputText from "../../components/ui/InputText/InputText";
import Button from "../../components/ui/Button/Button";
import styles from "./Login.style";
import Label from "../../components/ui/Label/Label";
import { RootStackScreenProps } from "../../navigation/types";
import { validateItem } from "../../utils/validate";
import { useState } from "react";
import Loader from "../../components/view/Loader/Loader";

const Login: React.FC<RootStackScreenProps<"Login">> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  /**
   * The function handles the login button press event by validating the email and password inputs,
   * setting error messages if necessary, and then authenticating the user if there are no errors.
   * @returns If either the email or password has an error message, the function will return and not
   * proceed to authenticate the user. If there are no error messages, the function will proceed to
   * authenticate the user.
   */
  const handleLoginPress = () => {
    const emailErrorMsg = validateItem("email", email);
    const passwordErrorMsg = validateItem("password", password);
    setEmailError(emailErrorMsg);
    setPasswordError(passwordErrorMsg);
    if (emailErrorMsg || passwordErrorMsg) return;
    authenticateUser();
  };

  /**
   * The function `authenticateUser` is used to create a new user with email and password, show a
   * loader while the authentication is in progress, and handle any errors that occur during the
   * authentication process.
   */
  const authenticateUser = () => {
    setShowLoader(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setShowLoader(false);
        navigateToHomeScreen();
      })
      .catch((error) => {
        console.log("error ", error);
        setShowLoader(false);
        if (error.code === "auth/email-already-in-use") {
          navigateToHomeScreen();
        } else {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: error.message,
          });
        }
      });
  };

  /**
   * The function `navigateToHomeScreen` resets the navigation stack and navigates to the "Home"
   * screen.
   */
  const navigateToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  /**
   * The function `handleEmailChange` updates the value of the `email` state variable with the provided
   * value.
   * @param {string} value - The value parameter is a string that represents the new email value that
   * needs to be set.
   */
  const handleEmailChange = (value: string) => setEmail(value);

  /**
   * The function "handlePasswordChange" is used to update the password value in a React component.
   * @param {string} value - The value parameter is a string that represents the new password value
   * that the user wants to set.
   */
  const handlePasswordChange = (value: string) => setPassword(value);

  /* The `return` statement is used to render the JSX (JavaScript XML) code that represents the UI of the
`Login` component. */
  return (
    <Container>
      <Loader visible={showLoader} />
      <Label fontSize={35} align="center" bold mb={70} mt={70}>
        Food Zone
      </Label>
      <InputText
        label="Email"
        mb={15}
        isRequired
        keyboardType="email-address"
        onChangeText={handleEmailChange}
        error={emailError}
      />
      <InputText
        label="Password"
        mb={30}
        isRequired
        isPasswordField
        onChangeText={handlePasswordChange}
        error={passwordError}
      />
      <Button
        label="Login"
        style={styles.loginBtn}
        onPress={handleLoginPress}
      />
    </Container>
  );
};

export default Login;
