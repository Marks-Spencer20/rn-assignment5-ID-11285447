import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from './screens/Home';
import Settings from './screens/Settings';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider>
<NavigationContainer>
    <SafeAreaProvider>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
            } else if (route.name === 'My Cards') {
              iconName = focused ? 'card' : 'card';
            }

            else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

        initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Tab.Screen name="My Cards" component={MyCards} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Statistics" component={Statistics} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Settings" component={Settings}
          options={{
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  </NavigationContainer>
    </ThemeProvider>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});
