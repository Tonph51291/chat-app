import useFontInter from "@/lib/providers/font-inter";
import QueryProvider from "@/lib/providers/query-provider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ToastManager from "toastify-react-native";
export default function RootLayout() {
  const [loaded, error] = useFontInter();
  if (!loaded || error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            {/* Stack Navigator */}
            <AppContainer />
            {/* Toast Manager */}
            <ToastManager />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
function AppContainer() {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </QueryProvider>
  );
}
