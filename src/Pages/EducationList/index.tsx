import React, { useState } from "react";
import EducationListComponent from "./EducationListComponent";
import { data } from "../../JSON/API/Education";
import { navigationPage } from "../../Constant/NavigationConstants";
import { useNavigation } from "@react-navigation/native";
export default function EducationListContainer() {
  const [lastData, setLastData] = useState<any>(data);
  const [searchText, setSearchText] = useState<string>("");
  const navigation = useNavigation();

  const onSearch = (text: string) => {
    setSearchText(text);
    const tempData = data.filter((item) =>
      item.title.toLocaleUpperCase("tr").includes(text.toLocaleUpperCase("tr"))
    );
    setLastData(tempData);
  };

  const onDetail = () => {
    navigation.navigate(navigationPage.EDUCATION_DETAIL);
  };

  return (
    <EducationListComponent
      onSearch={onSearch}
      searchText={searchText}
      data={lastData}
      onDetail={onDetail}
    />
  );
}
