import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from './Info';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

export default Home;