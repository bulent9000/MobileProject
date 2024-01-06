import { StyleSheet } from "react-native";
import { height, width } from "../Size";
import { colors } from "../Colors";
const dashboardStyles = StyleSheet.create({
  cardContainer: {
    width: width - width * 0.1,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },

  cardFlatListStyle: {
    height: height * 0.2,
    marginBottom: "5%",
  },
  cardImage: {
    width: "90%",
    height: "100%",
  },
  partnerContainer: {
    width: width * 0.27,
        height: width * 0.27,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors.lightBlue,
        borderWidth: 1,
        borderRadius: 4
  },
  partnerImage: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: 10,
  },
  columnWrapperStyle: {
    width: width - width * 0.1,
    height: width * 0.27,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  partnerFlatListStyle: {
    height: ((width * 0.27) * 2) + 10,
        marginBottom: 10,
  },
  userContainer: {
    width: width * 0.40,
    height: width * 0.5,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  userImageContainer: {
    width: '90%',
        height: '60%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: colors.white,
  },

  userImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: '80%',
    borderColor: colors.blue,
    borderWidth: 1,
    borderTopWidth: 0,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  boldText: {
    fontWeight: "600",
    fontSize: 11,
    textAlign: "center",
  },
  titleStyle: {
    fontSize: 11,
    textAlign: "center",
  },

  iconButtonStyle: {
    position: "absolute",
    zIndex: 1,
    width: 25,
    height: 25,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    top: (width * 0.5) / 2 - 12.5,
  },

  leftIcon: {
    left: -10,
  },

  icon: {
    width: 15,
    height: 15,
  },
  rightIcon: {
    right: -10,
  },
});
export default dashboardStyles;
