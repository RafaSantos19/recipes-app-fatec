import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4A7C59' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pratos Típicos Brasileiros 🇧🇷' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalhes da Receita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}