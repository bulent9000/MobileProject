import { View, Text, Image } from "react-native";
import React from "react";
import { data } from "../../JSON/API/EducationDetail";
import eduDetStyles from "../../UI/Styles/EducationDetailStyle";
import { ScrollView } from "react-native-gesture-handler";
import { EducationDetailProps } from "../../Type";
import { detailDescMax, threeDot } from "../../Constant/FormatString";
import DetailSeeButton from "../../Component/DetailSeeButton";

export default function EducationDetailComponent({
  isVisibleDesc,
  setIsVisibleDesc,
}: EducationDetailProps) {
  return (
    <View style={eduDetStyles.container}>
      <Image style={eduDetStyles.img} source={{ uri: data.image }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={eduDetStyles.textContainer}>
          <Text style={eduDetStyles.title}>{data.title}</Text>
          <Text style={eduDetStyles.timer}>{data.timer}</Text>
          <Text style={eduDetStyles.desc}>
            {isVisibleDesc ? data.desc: data.desc
              .substring(0, detailDescMax)
              .concat(data.desc.length > detailDescMax ?threeDot : "")}
          </Text>
          <DetailSeeButton
          label={isVisibleDesc? "notMore":"moreSee"}
          onPress={()=>setIsVisibleDesc(!isVisibleDesc)}
          />
        </View>
       {/* //bu kısma açılabilir sayfalar gelecek */}
      </ScrollView>
    </View>
  );
}
