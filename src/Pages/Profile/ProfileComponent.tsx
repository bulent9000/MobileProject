import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { ProfileProps } from "../../Type";
import profileStyles from "../../UI/Styles/ProfileStyle";
import { data } from "../../JSON/API/User";
import MapView, { Marker } from "react-native-maps";
import CustomButton from "../../Component/Button";

export default function ProfileComponent(props: ProfileProps) {
  // const {onLogOut}=props;

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.redContainer}>
        <View
          style={[profileStyles.opacityWheat, profileStyles.circle1]}
        ></View>

        <View
          style={[profileStyles.opacityWheat, profileStyles.circle2]}
        ></View>

        <View
          style={[profileStyles.opacityWheat, profileStyles.circle3]}
        ></View>

        <Text style={profileStyles.title}>{data.name}</Text>
      </View>

      <View style={profileStyles.userContainer}>
        <Image
          resizeMode="contain"
          style={profileStyles.img}
          source={require("../../../assets/img/pp.png")}
        />
      </View>
      {/*<View style={profileStyles.subContainer}/> */}
      <ScrollView >
        <View style={profileStyles.infoContainer}>
          <Text>E-Posta:{data.email}</Text>
          <Text>Telefon:{data.phone}</Text>
          <Text>Adres:{data.address}</Text>
        </View>
        <View>
          <MapView
            initialRegion={{
              latitude: data.coordinates.lat,
              longitude: data.coordinates.long,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0321,
            }}
            style={profileStyles.mapViewStyle}
          />
          <Marker
            coordinate={{
              latitude: data.coordinates.lat,
              longitude: data.coordinates.long,
            }}
          />
          <MapView />
        </View>
        <View style={profileStyles.buttonContainer}>
          <CustomButton onPress={props.onLogOut} tx="logout" />
        </View>
      </ScrollView>
    </View>
  );
}
