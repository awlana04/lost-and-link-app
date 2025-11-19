import { Pressable, Text, View } from 'react-native';

import Icon from '../atoms/icon';

export default function SearchBar() {
  return (
    <View className='w-96 h-12 rounded-2xl bg-lightGreen mt-12 my-6 justify-center'>
      <View className='ml-6 flex flex-row items-center'>
        <Icon color='green' size='small' name='search' />
        <Pressable>
          <Text className='font-light text-darkGreen text-small ml-4'>
            Pesquisar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
