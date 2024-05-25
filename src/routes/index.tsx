import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/login';
import Otp from '../screens/otp';
import Announcement from '../screens/announcement';
import {StackParamList} from '../common/types';
import MyPass from '../screens/my-pass';
import Profile from '../screens/profile';
import BottomTab from '../components/bottom_tab';

const Stack = createStackNavigator<StackParamList>();
const AuthStack = createStackNavigator<StackParamList>();
const TabStack = createBottomTabNavigator<StackParamList>();

function AuthScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Otp" component={Otp} />
    </AuthStack.Navigator>
  );
}

function TabScreen() {
  return (
    <TabStack.Navigator
      initialRouteName="Announcement"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <TabStack.Screen name="Announcement" component={Announcement} />
      <TabStack.Screen name="MyPass" component={MyPass} />
      <TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthScreen">
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
