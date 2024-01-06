import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import { useNavigation } from "@react-navigation/native";
import { useAppStore } from "../../Store/AppStore";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();
  const setIsLogin = useAppStore().setIsLogin;
  const setIsLoading = useAppStore().setIsLoading;

  const onNavigate = (params: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
       navigation.navigate(params);
    }, 1000);
   
  };
  const onLogin = () => {
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLogin(true);
    }, 1000);
  };

  //sadece js kodları olacak.Butona tıklandığında çalışacak olan
  //fonksiyonlar burada olacak
  return (
    <LoginComponent
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onNavigate={onNavigate}
      onLogin={onLogin}
    />
  );
}
