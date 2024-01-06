import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationPage } from "../Constant/NavigationConstants";
import DashboardContainer from "../Pages/Dashboard";
import ProfileContainer from "../Pages/Profile";
import { Image } from "react-native";
import EducationNavigation from "./EducationNavigation";
import EventNavigation from "./EventNavigation";
const Tabs = createBottomTabNavigator();

export default function BodyNavigation() {
  const ImageRender = ({ uri }) => {
    return <Image style={{ width: 20, height: 20 }} source={uri} />;
  };

  const tabBarFunc=(route,focused)=>{
    switch (route.name) {
      case navigationPage.HOME:
       return(
        <ImageRender
        
        uri={
          focused ? require("../../assets/tabIcons/homeActive.png"):(
            require("../../assets/tabIcons/home.png")
          )
        }/>
       );
       case navigationPage.EDUCATION_LIST:
        return(
         <ImageRender
         
         uri={
           focused ? require("../../assets/tabIcons/educationActive.png"):(
             require("../../assets/tabIcons/education.png")
           )
         }/>
        );
        case navigationPage.EVENT_LIST:
          return(
           <ImageRender
           
           uri={
             focused ? require("../../assets/tabIcons/eventlistActive.png"):(
               require("../../assets/tabIcons/eventlist.png")
             )
           }/>
          );
          case navigationPage.PROFILE:
          return(
           <ImageRender
           
           uri={
             focused ? require("../../assets/tabIcons/profileActive.png"):(
               require("../../assets/tabIcons/profile.png")
             )
           }/>
          );
    }
  }

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
        return  tabBarFunc(route,focused);

        },
      })}
    >
      <Tabs.Screen name={navigationPage.HOME} component={DashboardContainer} />
      <Tabs.Screen
        name={navigationPage.EDUCATION_LIST}
        component={EducationNavigation}
        options={{headerShown:false}}
      />
      <Tabs.Screen
        name={navigationPage.EVENT_LIST}
        component={EventNavigation}
        options={{headerShown:false}}
      />
      <Tabs.Screen name={navigationPage.PROFILE} component={ProfileContainer} />
    </Tabs.Navigator>
  );
}
