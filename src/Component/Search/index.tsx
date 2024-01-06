import { View, Text,TextInput,Image } from "react-native";
import React from "react";
import searchStyles from "./SearchStyle";
import { SearchProps } from "../../Type";

export default function Search({value,onChangeText,placeholder}:SearchProps) {
  return (
    <View style={searchStyles.container}>
      <TextInput 
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      
      style={searchStyles.input}/>
        <Image style={searchStyles.icon} source={require("../../../assets/icons/search.png")} />
     
    </View>
  );
}
