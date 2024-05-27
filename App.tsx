import { NavigationContainer } from "@react-navigation/native";
import TabScreen from "./src/navigation";
import { AppProvider } from "./src/context/userContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <TabScreen />
      </NavigationContainer>
    </AppProvider>
  );
}
