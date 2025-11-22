import { Tabs } from 'expo-router';
import { View } from 'react-native';

import TabBar from '../components/molecules/tab-bar';

export default function RootLayout() {
  return (
    <View className='h-full'>
      <Tabs
        screenOptions={{ headerShown: false }}
        initialRouteName='index'
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name='index' />
        <Tabs.Screen name='register' />
        <Tabs.Screen name='settings' />
      </Tabs>
    </View>
  );
}
