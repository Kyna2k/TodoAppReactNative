import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer as Container} from '@react-navigation/native';
import {routes} from './routes';
import HomeScreen from '../views/home/Home';

const Stack = createNativeStackNavigator();

const NavigationContainer: React.FC = () => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.home} component={HomeScreen} />
      </Stack.Navigator>
    </Container>
  );
};
export default NavigationContainer;
