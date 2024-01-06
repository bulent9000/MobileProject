import { ActivityIndicator, Modal, View } from "react-native";
import React from "react";
import { useAppStore } from "../../Store/AppStore";
import styles from "./LoadingStyle";
import { colors } from "../../UI/Colors";

export default function Loading() {
  const isLoading = useAppStore().isLoading;
  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" color={colors.red} />
      </View>
    </Modal>
  );
}
