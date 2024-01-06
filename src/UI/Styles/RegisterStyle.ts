import { StyleSheet } from "react-native";
import { colors } from "../Colors";

const registerStyle = StyleSheet.create({
  checkButton: {
    //iput kadar boyut olmasını istiyorum
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    marginLeft: 5,
  },
  icon: {
    width: 15,
    height: 15,
  },

  modalContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.opacityBlack,
  },
  modalWhiteContainer: {
    width:"80%",
    height:"80%",
    backgroundColor:colors.white,
    borderRadius:20,   
    padding:"2.5%", 
    alignItems:"center",
  },

  closeButton:{
  width:"100%",
  alignItems:"flex-end",
  },

  closeIcon:{
    width:20,
    height:20,
 
  },
});

export default registerStyle;
