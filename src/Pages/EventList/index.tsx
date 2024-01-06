import React, { useState } from "react";
import EventListComponent from "./EventListComponent";
import { data } from "../../JSON/API/Event";
import { useNavigation } from "@react-navigation/native";
import { navigationPage } from "../../Constant/NavigationConstants";
export default function EventListContainer() {
  const [searchText, setSearchText] = useState<string>("");
  const [lastData, setLastData] = useState<any>(data);
  const navigation = useNavigation();
  const onSearch = (text: string) => {
    setSearchText(text);
    const templist = data.filter((item) =>
      item.title.toLocaleLowerCase("tr").includes(text.toLocaleLowerCase("tr"))
    );

    setLastData(templist);
  };
  const onDetail = () => {
    navigation.navigate(navigationPage.EVENT_DETAIL);
  };
  return (
    <EventListComponent
      data={lastData}
      searchText={searchText}
      onSearch={onSearch}
      onDetail={onDetail}
    />
  );
}
