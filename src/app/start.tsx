import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The 7:55 AM bell chimes over the hallway speakers, crisp and loud against the chatter of hundreds of sleepy teenagers. The smell of floor wax, old lockers, and scorched cafeteria toast hangs in the air. Alex swings a backpack over one shoulder, standing near the front entrance of Oakridge High. It’s a completely standard Monday morning.
        {"\n\n"}
        Alex has ten minutes before the final bell rings for first period and needs to decide how to spend them.
        {"\n\n"}
        What should Alex do?
        </Text>
      <Link href="/cafeteria" style={styles.button}> Go to the cafeteria</Link>

      <Link href="/locker" style={styles.button}> Go to your locker</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
});
