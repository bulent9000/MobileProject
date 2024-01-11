import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import educationStyles from "../../UI/Styles/EducationStyle";
import CustomText from "../../Component/Text";
import Search from "../../Component/Search";
import { EducationListProps } from "../../Type";
import EmptyComponent from "../../Component/EmptyComponent";
import { descMax, threeDot, titleMax } from "../../Constant/FormatString";
import DetailSeeButton from "../../Component/DetailSeeButton";
export default function EducationListComponent({
  searchText,
  onSearch,
  data,
  onDetail,
}: EducationListProps) {
  const listCard = ({ item }) => (
    <View style={educationStyles.cardContainer}>
      <Text style={educationStyles.title}>
        {item.title
          .substring(0, titleMax)
          .concat(item.title.length > titleMax ? threeDot : "")}
      </Text>

      <Text style={educationStyles.timer}>
        Eğitimin süresi: {item.timer} saat
      </Text>

      <Text style={educationStyles.desc}>
        {item.desc
          .substring(0, descMax)
          .concat(item.desc.length > descMax ? threeDot : "")}
      </Text>
      <DetailSeeButton label="detailSee" onPress={onDetail} />
    </View>
  );

  return (
    <View style={educationStyles.container}>
      <Search
        value={searchText}
        onChangeText={onSearch}
        placeholder="Eğitim ara..."
      />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={listCard}
        ListEmptyComponent={() => <EmptyComponent text={searchText} />}
      />
    </View>
  );
}
