import { createStackNavigator } from "@react-navigation/stack";
import LoginContainer from "../Pages/Login";
import RegisterContainer from "../Pages/Register";
import ForgotPasswordComponent from "../Pages/ForgotPassword/ForgotPasswordComponent";
import { navigationPage } from "../Constant/NavigationConstants";

const Stack = createStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationPage.LOGIN} component={LoginContainer} />
      <Stack.Screen name={navigationPage.REGISTER} component={RegisterContainer} />
      <Stack.Screen name={navigationPage.FORGOTPASSWORD} component={ForgotPasswordComponent} />
    </Stack.Navigator>
  );
}
