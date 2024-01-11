import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DetilSeeButtonProps } from '../../Type'
import CustomText from '../Text'
import detailSeeButtonStyles from './DetailSeeButtonStyle'


export default function DetailSeeButton({label,onPress}:DetilSeeButtonProps) {
  return (
    <View style={detailSeeButtonStyles.buttonContainer}>
        <TouchableOpacity style={detailSeeButtonStyles.button} onPress={onPress}>
          <CustomText tx={label} style={detailSeeButtonStyles.textLine} />
        </TouchableOpacity>
      </View>
  )
}