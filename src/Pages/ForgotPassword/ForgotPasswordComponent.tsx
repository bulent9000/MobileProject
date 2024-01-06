import React from "react";
import WhiteContainer from "../../Component/WhiteContainer";
import LogoImage from "../../Component/LogoImage";
import BoxContainer from "../../Component/BoxContainer";
import { TextInput } from "react-native-gesture-handler";
import Input from "../../Component/Input";
import { ForgotPasswordProps } from "../../Type";
import CustomButton from "../../Component/Button";

export default function ForgotPasswordComponent({
  email,
  setEmail,
}: ForgotPasswordProps) {
  return (
    <WhiteContainer>
      <LogoImage />
      <BoxContainer>
        <Input value={email} setValue={setEmail} placeHolder="Email" />

        <CustomButton
        tx="confirmationCode"
        onPress={()=>console.log("girdi")
        }
        />
      </BoxContainer>
    </WhiteContainer>
  );
}
