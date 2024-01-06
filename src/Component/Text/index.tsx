import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";
import tr from "../../JSON/tr";
import { CustomTextType } from "../../Type";
//tr.ts dosyasından gelen değişken
//json dan gelen dil bilgisi

// interface CustomTextProps{
// key:string;
// }


//export default function CustomText({ key }: {key:string}) {

export default function CustomText({ tx,style }: CustomTextType) {
    //tx="login" diğer sayfadan bu şekilde yollandı.
    //tr[tx] tr nin içindeki tx in login key ini alır ve
    //tr içindeki bu login key ine karşı gelen value değerini ekranda 
    //gösterir.
    const lastText=tr[tx];
  return <Text style={style}>
    {
    lastText
    }
    </Text>;
}
