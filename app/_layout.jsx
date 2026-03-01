import { Slot, Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { tokenCache } from "@clerk/clerk-expo/token-cache";
// import { COLORS } from "@/constants/colors";
import SafeScreen from "@/Components/SafeScreen";

export default function RootLayout() {
  // return <Stack screenOptions={{ headerShown: false }} / >;

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      </SafeAreaView> */}
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      {/* <StatusBar style="auto" /> */}
    </ClerkProvider>
  );
}
