import { StyleSheet } from "react-native";
import { width } from "../../UI/Size";
import { colors } from "../../UI/Colors";

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:width,
        padding:"5%",
        alignItems:"center",
        backgroundColor:colors.white,
    }
});

export default styles;