import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cafeteria</Text>
      <Text style={styles.text}>Alex pushes open the heavy double doors to the cafeteria. The room is eerie and deserted, except for Sam, who is crouched beneath a corner lunch table wearing night-vision goggles and tuning a radio receiver hooked into a metal lunchbox. Sam frantically signals Alex to get down. "Keep your voice down," Sam whispers. "They aren't serving breakfast today—the staff is setting up a high-frequency jammer across the whole district!"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    padding: 20,
    verticalAlign: 'top',

  },
});