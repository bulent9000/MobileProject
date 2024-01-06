import React, { useState } from "react";
import WhiteContainer from "../Component/WhiteContainer";
import LogoImage from "../Component/LogoImage";
import BoxContainer from "../Component/BoxContainer";
import { RegisterProps } from "../Type";
import Input from "../Component/Input";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../Component/Button";
import { TouchableOpacity, View, Image, Modal } from "react-native";
import CustomText from "../Component/Text";
import registerStyle from "../UI/Styles/RegisterStyle";
import WebView from "react-native-webview";
import { width } from "../UI/Size";

export default function RegisterComponent(props: RegisterProps) {
  const {
    email,
    setEmail,
    name, 
    setName,
    password,
    setPassword,
    conPassword,
    setConPassword,
    isVisible,
    setIsVisible,
    phone,
    setPhone,
    isCheck,
    // setIsCheck,
    onModal,
  } = props;

  return (
    <WhiteContainer>
      {/* dikeydeki scroll bar sembolünü kaldırır ama scroll işlemi devam eder */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoImage />
        <BoxContainer>
          <Input value={name} setValue={setName} placeHolder="İsim soyisim" />

          <Input value={email} setValue={setEmail} placeHolder="Email" />

          <Input value={phone} setValue={setPhone} placeHolder="Telefon" />

          <Input
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            placeHolder="Şifre"
          />

          <Input
            value={conPassword}
            setValue={setConPassword}
            placeHolder="Şifreyi doğrula"
            secureTextEntry={true}
          />
          {/*TouchableOpacity nin Modal ı açtığı kısım ?  */}

          <TouchableOpacity
            style={registerStyle.checkButton}
            onPress={() => setIsVisible(!isVisible)}
          >
            <View style={registerStyle.checkBox}>
              {isCheck && (
                <Image
                  source={require("../../../wissenLesson/assets/check.png")}
                  style={registerStyle.icon}
                  resizeMode="contain"
                />
              )}
            </View>
            <CustomText tx="policyText" style={registerStyle.desc} />
          </TouchableOpacity>

          <CustomButton tx="register" onPress={() => console.log("Girdi")} />
        </BoxContainer>
        <Modal visible={isVisible} transparent={true}>
          <View style={registerStyle.modalContainer}>
            <View style={registerStyle.modalWhiteContainer}>
              <TouchableOpacity  style={registerStyle.closeButton} onPress={() => setIsVisible(false)}>
                <Image
                  style={registerStyle.closeIcon}
                  source={require("../../../wissenLesson/assets/close.png")}
                ></Image>
              </TouchableOpacity>
              <WebView
                style={{ width: width * 0.7, zIndex: -1 }}
                source={{
                  uri: "https://www.jotform.com/pdf-editor/new/20200694237822052",
                }}
              />

              <CustomButton tx="okeyButton" onPress={onModal} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </WhiteContainer>
  );
}
