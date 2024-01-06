import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BodyNavigation from './BodyNavigation';
import AuthNavigation from './AuthNavigation';
import { useAppStore } from '../Store/AppStore';

export default function AppNavigation() {
    // const [isLogin,setIsLogin]=useState<boolean>(false);
    const isLogin=useAppStore().isLogin;
  
    
  return (

    <NavigationContainer>
    {
             isLogin ? <BodyNavigation/> : <AuthNavigation/>
                 
    }

    </NavigationContainer>
  )
}