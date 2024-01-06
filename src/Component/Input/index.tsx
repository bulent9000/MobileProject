import { TextInput } from 'react-native'
import React from 'react'
import { InputProps } from '../../Type'
import styles from './inputStyle'

export default function Input({value,setValue,placeHolder,secureTextEntry=false}:InputProps) {
  return (
  
    <TextInput
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={(text) => setValue(text)}
    style={styles.input}
    placeholder={placeHolder}
  />
  )
}