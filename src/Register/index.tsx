import React, { useState } from "react";
import RegisterComponent from "./RegisterComponent";

export default function RegisterContainer() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);


    //Modal üzerinde sözleşme onaylandığında çalışan kısım  
  const onModal=()=>{
    setIsCheck(true);
    setIsVisible(false);
    }


  return (
    <RegisterComponent
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      password={password}
      setPassword={setPassword}
      conPassword={conPassword}
      setConPassword={setConPassword}
      isVisible={isVisible}
      isCheck={isCheck}
      onModal={onModal}
      setIsVisible={setIsVisible}
    ></RegisterComponent>
  );
}
