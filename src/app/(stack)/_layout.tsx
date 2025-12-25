import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function RootStack() {
  return (
    <View className='h-full'>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='/(create-account)/first-form' />
        <Stack.Screen name='/(create-account)/second-form' />
        <Stack.Screen name='/(create-account)/third-form' />
      </Stack>
    </View>
  );
}
