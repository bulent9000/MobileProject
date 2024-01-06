import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WhiteContainer from "../../Component/WhiteContainer";
import dashboardStyles from "../../UI/Styles/DashboardStyles";
import { data, partners, successStories } from "../../JSON/API/Dashboard";
import { DashboardType } from "../../Type";

export default function DashboardComponent({
  storiesRef,
  onLeft,
  onRight,
}: DashboardType) {
  /* 
      <ScrollView horizontal={true}>
        {
          data.map((item)=>(
        <Card item={item}/>
          ))
        }
      </ScrollView> */
  const Card = ({ item }) => (
    <View style={dashboardStyles.cardContainer}>
      <Image
        resizeMode="contain"
        style={dashboardStyles.cardImage}   
        source={{ uri: item.image }}
      />
    </View>
  );

  const PartnerCard = ({ item }) => (
    <View style={dashboardStyles.partnerContainer}>
      <Image
        style={dashboardStyles.partnerImage}
        source={{ uri: item.image }}
      />
      <Text style={dashboardStyles.title}>{item.title}</Text>
    </View>
  );

  const UserCard = ({ item }) => (
    <View style={dashboardStyles.userContainer}>
      <View style={dashboardStyles.userImageContainer}>
        <Image style={dashboardStyles.userImage} source={{ uri: item.image }} />
      </View>

      <View style={dashboardStyles.textContainer}>
        <Text style={dashboardStyles.boldText}>{item.name}</Text>
        <Text style={dashboardStyles.titleStyle}>{item.title}</Text>
      </View>
    </View>
  );

  const DragButton = ({ onPress, style, icon }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[dashboardStyles.iconButtonStyle, style]}
    >
      <Image style={dashboardStyles.icon} source={icon} />
    </TouchableOpacity>
  );

  return (
    <WhiteContainer>
      <View style={dashboardStyles.cardFlatListStyle}>
        <FlatList
          data={data}
          //yatayda mapleyip yanyana sıralar
          horizontal={true}
          renderItem={Card}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
      </View>
      <View style={dashboardStyles.partnerFlatListStyle}>
        <FlatList
          columnWrapperStyle={dashboardStyles.columnWrapperStyle}
          numColumns={3}
          data={partners}
          renderItem={PartnerCard}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        <DragButton
          onPress={onLeft}
          style={dashboardStyles.leftIcon}
          icon={require("../../../assets/icons/left.png")}
        />

        <FlatList
          ref={storiesRef}
          horizontal={true}
          data={successStories}
          renderItem={UserCard}
        />

        <DragButton
          onPress={onRight}
          style={dashboardStyles.rightIcon}
          icon={require("../../../assets/icons/right.png")}
        />
      </View>
    </WhiteContainer>
  );
}
