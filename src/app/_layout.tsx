import { Tabs } from 'expo-router';
import { View } from 'react-native';

import TabBar from '../components/molecules/tab-bar';

export default function RootLayout() {
  return (
    <View className='bg-darkBackground h-full'>
      <Tabs
        screenOptions={{ headerShown: false }}
        initialRouteName='index'
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name='settings'
          options={{
            title: 'Settings',
          }}
        />
        <Tabs.Screen
          name='index'
          options={{
            title: 'Add',
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Me',
          }}
        />
      </Tabs>
    </View>
  );
}
