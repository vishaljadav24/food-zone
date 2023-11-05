import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import styles from "./Container.style";

interface ContainerProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default Container;
