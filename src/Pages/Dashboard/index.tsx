import { FlatList } from "react-native";
import React, { useRef, useState } from "react";
import DashboardComponent from "./DashboardComponent";
import { successStories } from "../../JSON/API/Dashboard";

export default function DashboardContainer() {
  const [storiesIndex, setStoriesIndex] = useState<number>(0);
  const storiesRef = useRef<FlatList>();

  const onLeft = () => {
    if (storiesIndex > 0) {
      storiesRef.current.scrollToIndex({
        index: storiesIndex - 1,
      })
      setStoriesIndex(storiesIndex - 1);
    }
  }
  const onRight = () => {
    if (storiesIndex !== successStories.length - 1) {
      storiesRef.current.scrollToIndex({
          index: storiesIndex + 1,
      })
      setStoriesIndex(storiesIndex + 1);
    }
  }

  return (
    <DashboardComponent
      onLeft={onLeft}
      onRight={onRight}
      storiesRef={storiesRef}
    />
  )
}
