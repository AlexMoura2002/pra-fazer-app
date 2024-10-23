import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    
    <Tabs
    screenOptions={{
      headerStyle: { backgroundColor: "#F60" },
    }}
    >
      <Tabs.Screen name="tasks" options={{}} />
      <Tabs.Screen name="user" options={{}}/>
      <Tabs.Screen name="about" options={{}}/>

    
    </Tabs>
  );
}
