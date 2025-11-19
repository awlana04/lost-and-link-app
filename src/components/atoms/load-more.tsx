import { Text, TouchableOpacity } from 'react-native';

export default function LoadMore() {
  return (
    <TouchableOpacity className='w-24 h-8 rounded-2xl bg-darkGreen flex items-center justify-center mt-4'>
      <Text className='text-lightGreen font-medium text-sm'>Ver mais...</Text>
    </TouchableOpacity>
  );
}
