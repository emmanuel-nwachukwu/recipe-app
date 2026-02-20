import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import reactLogo from "@/assets/images/react-logo.png";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World.</Text>

      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1771434689811-32ea55b3b7ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        // source={require("@/assets/images/react-logo.png")}
        source={reactLogo}
        style={{ width: 100, height: 100 }}
      />

      <TextInput
        placeholder="email"
        style={{ borderWidth: 1, padding: 10 }}
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text>Click me!</Text>
      </TouchableOpacity>

      <Link href={"/about"}>Viit About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "red", fontSize: 40 },
});
