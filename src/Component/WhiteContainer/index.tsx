import { View, Text } from "react-native";
import React from "react";
import { ChildrenProps } from "../../Type";
import styles from "./WhiteContainerStyle";

export default function WhiteContainer({ children }: ChildrenProps) {
  return <View style={styles.container}>{children}</View>;
}
