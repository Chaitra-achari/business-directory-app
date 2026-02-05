import { Stack } from "expo-router";
import {useFont} from 'expo-fontf'
export default function RootLayout() {
  const [fontsLoaded]=useFonts
  return <Stack />;
}
