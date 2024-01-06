// import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import CustomButton from "../../Component/Button";
import { LoginComponentProps } from "../../Type";
import WhiteContainer from "../../Component/WhiteContainer";
import { colors } from "../../UI/Colors";
import { navigationPage } from "../../Constant/NavigationConstants";
import LogoImage from "../../Component/LogoImage";
import BoxContainer from "../../Component/BoxContainer";
import Input from "../../Component/Input";

export default function LoginComponent(props: LoginComponentProps) {
  const { email, password, setEmail, setPassword, onNavigate,onLogin } = props;
  //buton,input,image gibi UI kodları olacak

  return (
    <WhiteContainer>
      <LogoImage />

      <BoxContainer>
        {/* <View style={loginStyle.subContainer}> */}
        <Input value={email} setValue={setEmail} placeHolder="Email" />
        <Input
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          placeHolder="Password"
        />
        <CustomButton tx="login" onPress={onLogin} />
        <CustomButton
          color={colors.maroon}
          tx="forgotPassword"
          onPress={() => onNavigate(navigationPage.FORGOTPASSWORD)}
        />
        <CustomButton
          color={colors.lime}
          tx="register"
          onPress={() =>onNavigate(navigationPage.REGISTER)}
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
