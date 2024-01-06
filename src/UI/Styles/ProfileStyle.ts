import { StyleSheet } from "react-native";
import { colors } from "../Colors";
import { width } from "../Size";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  redContainer: {
    width: width,
    height: 200,
    backgroundColor: colors.red,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  opacityWheat: {
    width: width / 2,
    height: width / 2,
    borderRadius: 100,
    backgroundColor: colors.wheat,
    opacity: 0.8,
    position: "absolute",
  },

  circle1: {
    top: -100,
    right: -30,
  },
  circle2: {
    right: 20,
    top: 30,
  },

  circle3: {
    left: 5,
    top: -60,
  },
  blackCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.black,
  },
  userContainer: {
    width: width * 0.3,
    height: width * 0.2,
    backgroundColor: colors.red,
    borderRadius: width * 0.3,
    padding: 2,
    top: -(width * 0.2) / 2,
    left: width / 2 - (width * 0.3) / 2,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: width * 0.3
  },
  title: {
    zIndex: 10,
    fontSize: 60,
    fontWeight: "600",
  },
  infoContainer: {
    marginHorizontal: "5%",
    width: "90%",
    padding: "5%",
    borderColor: colors.lightRed,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
    gap: 10,
  },
  mapViewStyle: {
    width: width * 0.86,
    margin: "5%",
    height: 130,
  },
  subContainer: {
    top: -((width * 0.2) / 2),
  },
  buttonContainer:{
    marginHorizontal: '5%',
    width:'100%'
  },
});

export default profileStyles;
