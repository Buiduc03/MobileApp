import { View, StyleSheet, ScrollView } from "react-native";
import FriendListScreen from "./FriendListScreen";
import ScreenLayout from "./ScreenLayout";

function FriendsScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <View style={styles.container}>
          <FriendListScreen />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sportsScreenContainer: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default FriendsScreen;
