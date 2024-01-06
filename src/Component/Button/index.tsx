import { TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../Text'
import styles from './ButtonStyle';
import { CustomButtonProps } from '../../Type';


export default function CustomButton({tx,onPress,color}:CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.button,color &&{backgroundColor:color}]} onPress={onPress}>
      <CustomText style={styles.buttonText}
      tx={tx}
      />
        
      
    </TouchableOpacity>
  )
}