import { Text,Image } from 'react-native'
import React from 'react'
import { EmptyProps } from '../../Type'
import WhiteContainer from '../WhiteContainer'
import styles from './EmptyComponentStyle'

export default function EmptyComponent({text}:EmptyProps) {
  return (
    <WhiteContainer>

      <Text style={styles.sorryText}>Üzgünüm...</Text>
      <Text style={styles.text}>"{text}" ile ilgili içerik bulunamadı</Text>
      <Image
      style={styles.image}
      source={require("../../../assets/icons/noResult.png")}
      />
        
    </WhiteContainer>
  )
}