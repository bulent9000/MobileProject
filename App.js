import Loading from "./src/Component/Loading";
import CustomSafeArea from "./src/Component/Wrapper/CustomSafeArea";
import AppNavigation from "./src/Navigation";
import "react-native-gesture-handler";

export default function App() {
  return (
    <CustomSafeArea>
      <AppNavigation/>
      <Loading/>
    </CustomSafeArea>
  );
}