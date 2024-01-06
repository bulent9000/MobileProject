import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationPage } from '../Constant/NavigationConstants';
import EventListContainer from '../Pages/EventList';
import EventDetailContainer from '../Pages/EventDetail';
const Stack=createStackNavigator();

export default function EventNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationPage.EVENT_LIST} component={EventListContainer}></Stack.Screen>
      <Stack.Screen name={navigationPage.EVENT_DETAIL} component={EventDetailContainer}></Stack.Screen>
    </Stack.Navigator>
  )
}