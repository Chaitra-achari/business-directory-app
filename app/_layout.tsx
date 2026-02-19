import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    appFont: require("./../assets/fonts/Outfit-Regular.ttf"),
    appFontBold: require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ClerkProvider>
      <Stack />
    </ClerkProvider>
  );
}
