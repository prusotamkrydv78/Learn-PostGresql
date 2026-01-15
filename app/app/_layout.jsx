import { Slot, Redirect, useSegments } from "expo-router";
import "../global.css";
import SafeAreaContextView from "@/components/SafeAreaContextView";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [isUserLogin] = useState(false); // replace with real auth
  const segments = useSegments();

  const inAuthGroup = segments[0] === "(auth)";

  // Prevent redirect loop
  if (!isUserLogin && !inAuthGroup) {
    return <Redirect href="/(auth)" />;
  }

  if (isUserLogin && inAuthGroup) {
    return <Redirect href="/(app)" />;
  }

  return (
    <SafeAreaContextView>
      <StatusBar style="light" backgroundColor="#0a0a0a" />

      <Slot />
    </SafeAreaContextView>
  );
}
