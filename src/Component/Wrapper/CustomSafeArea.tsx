import {  SafeAreaView } from 'react-native'
import React from 'react'
import styles from './CustomSafeAreaStyle'
import { ChildrenProps } from '../../Type'

export default function CustomSafeArea({
    children
}: ChildrenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
        {children}
    </SafeAreaView>
  )
}