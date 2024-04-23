import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import IconButton from "./IconButton";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Header() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    NTSomicBold: require("../../assets/fonts/NTSomic-Bold.ttf"),
    NTSomicSemibold: require("../../assets/fonts/NTSomic-Semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.ageContainer}>
        <Text style={styles.age}>{authCtx.userData?.age}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{authCtx.userData?.name}</Text>
        </View>
        <View style={styles.moneyContainer}>
          <Ionicons name="cash" color={Colors.lightGreen} size={24} />
          <Text style={styles.money}>${authCtx.userData?.money}</Text>
        </View>
        <View style={styles.moneyContainer}>
          <MaterialIcons name="savings" color={"pink"} size={24} />
          <Text style={styles.money}>${authCtx.userData?.savings}</Text>
        </View>
      </View>

      <View style={styles.indexContainer}>
        <View style={styles.innerIndexContainer}>
          <Ionicons name="heart" color={Colors.redHealth} size={24} />
          <Text style={styles.money}>{authCtx.userData?.health}</Text>
        </View>

        <View style={styles.innerIndexContainer}>
          <FontAwesome6 name="brain" color={Colors.blueIQ} size={24} />
          <Text style={styles.money}>{authCtx.userData?.iq}</Text>
        </View>

        <View style={styles.innerIndexContainer}>
          <Ionicons name="happy" color={Colors.yellowHappiness} size={24} />
          <Text style={styles.money}>{authCtx.userData?.happiness}</Text>
        </View>
      </View>

      <View style={styles.iconButtonContainer}>
        <IconButton
          icon={"questioncircleo"}
          onPress={() => navigation.navigate("HowtoPlay")}
          size={24}
          color={Colors.white}
        />
        <IconButton
          icon={"logout"}
          onPress={authCtx.logout}
          size={24}
          color={Colors.white}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.black,
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  ageContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.lightGreen,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    marginHorizontal: 15,
  },
  age: {
    color: Colors.black,
    fontSize: 24,
    fontFamily: "NTSomicBold",
  },
  infoContainer: {
    flex: 3,
  },
  indexContainer: {
    flex: 4,
    marginLeft: 10,
  },
  iconButtonContainer: {
    paddingTop: 10,
    marginRight: 10,
    justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontFamily: "NTSomicBold",
    fontSize: 20,
    color: Colors.white,
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  money: {
    fontFamily: "NTSomicSemibold",
    fontSize: 16,
    color: Colors.white,
    marginHorizontal: 10,
  },
  innerIndexContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 3,
  },
});
