import { View } from 'react-native'
import React from 'react'
import { ChildrenProps } from '../../Type'
import styles from "./BoxContainerStyle"
export default function BoxContainer({children}:ChildrenProps) {
  return (
<View style={styles.subContainer}>
  {
    children
  }
  </View>
  )
}