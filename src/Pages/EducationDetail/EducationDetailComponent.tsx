import { View, Text, Image } from "react-native";
import React from "react";
import { data } from "../../JSON/API/EducationDetail";
import eduDetStyles from "../../UI/Styles/EducationDetailStyle";
import { ScrollView } from "react-native-gesture-handler";

export default function EducationDetailComponent() {
  return (
    <View style={eduDetStyles.container}>
      <Image style={eduDetStyles.img} source={{ uri: data.image }} />
<ScrollView showsVerticalScrollIndicator={false}>
<View style={eduDetStyles.textContainer}>
        <Text style={eduDetStyles.title}>{data.title}</Text>
        <Text style={eduDetStyles.timer}>{data.timer}</Text>
        <Text style={eduDetStyles.desc}>{data.desc}</Text>
      </View>
      <View>

        {/* //bu kısma açılabilir sayfalar gelecek */}
      </View>

</ScrollView>

    
    </View>
  );
}
