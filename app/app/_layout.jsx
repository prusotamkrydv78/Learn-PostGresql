import { Slot, Stack } from "expo-router";
import "../global.css";
import SafeAreaContextView from "@/components/SafeAreaContextView";
export default function RootLayout() {
  return (
    <SafeAreaContextView>
      <Slot />;
    </SafeAreaContextView>
  );
}
