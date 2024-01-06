import React from "react";
import { View, Text, FlatList, Image,TouchableOpacity } from "react-native";
import eventStyles from "../../UI/Styles/EventStyle";
import Search from "../../Component/Search";
import { data } from "../../JSON/API/Event";
import CustomText from "../../Component/Text";
import { EventProps } from "../../Type";
import EmptyComponent from "../../Component/EmptyComponent";
import { threeDot, titleMax } from "../../Constant/FormatString";

export default function EventListComponent({searchText,onSearch,data,onDetail}:EventProps) {
  const Card = ({ item }) => (
    <View style={eventStyles.card}>
      <Image resizeMode="contain" style={eventStyles.img} source={{ uri: item.image }} />
      <View style={eventStyles.textContainer}>
        <Text style={eventStyles.title}>{item.title.substring(0,titleMax
          ).concat(item.title.length>titleMax? threeDot:"")}</Text>
        {item?.date && <Text style={eventStyles.smallText}>{item.date}</Text>}
        {item?.location && (
          <Text style={eventStyles.smallText}>{item.location}</Text>
        )}
         <View style={eventStyles.buttonContainer}>
        <TouchableOpacity style={eventStyles.button} onPress={onDetail}>
          <CustomText
          tx="detailSee"
          />
          
        </TouchableOpacity>
      </View>
      </View>
     
    </View>
  );

  return (
    <View style={eventStyles.container}>
      <Search value={searchText} onChangeText={onSearch} placeholder="Etkinlik ara" />
      <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={Card}
      ListEmptyComponent={()=><EmptyComponent text={searchText}/>}
      />
    </View>
  );
}
