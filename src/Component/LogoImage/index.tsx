import {Image } from 'react-native'
import React from 'react'
import styles from './LogoImageStyle'

export default function LogoImage() {
  return (
    <Image
    style={styles.logo}
    resizeMode="contain"
    source={{
      uri: "https://images.unsplash.com/photo-1699084681511-8cc4306de721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    }}
  />
  )
}