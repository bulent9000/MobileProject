import { StyleSheet } from "react-native";
import { colors } from "../Colors";
import { height } from "../Size";
const eduDetStyles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:colors.white,
    },

    img:{
        width:"100%",
        height:height*0.3,
    },
    title:{
fontSize:16,
fontWeight:"600",
    },
    timer:{
        
    },
    desc:{

    },
    textContainer:{
        padding:"5%",
        gap:10,
    }
});

export default eduDetStyles