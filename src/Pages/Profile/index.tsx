import React from 'react'
import ProfileComponent from './ProfileComponent'
import { useAppStore } from '../../Store/AppStore'

export default function ProfileContainer() {


  const setIsLogin=useAppStore().setIsLogin;
  const setIsLoading=useAppStore().setIsLoading;

const onLogOut=()=>{
  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
    setIsLogin(false);
  }, 1000);
  
}


  return (
   
    <ProfileComponent
    onLogOut={onLogOut}
    />

  )
}