import { View, Text } from 'react-native'
import React, { useState } from 'react'
import EducationDetailComponent from './EducationDetailComponent'

export default function EducationDetailContainer() {
  const [isVisibleDesc,setIsVisibleDesc]=useState(false);
  return  <EducationDetailComponent
  isVisibleDesc={isVisibleDesc}
  setIsVisibleDesc={setIsVisibleDesc}
  />
}