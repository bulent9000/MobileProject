import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationPage } from "../Constant/NavigationConstants";
import EducationListContainer from "../Pages/EducationList";
import EducationDetailContainer from "../Pages/EducationDetail";

const Stack = createStackNavigator();

export default function EducationNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationPage.EDUCATION_LIST} component={EducationListContainer}/>

      <Stack.Screen name={navigationPage.EDUCATION_DETAIL} component={EducationDetailContainer}/>
    </Stack.Navigator>
  );
}
