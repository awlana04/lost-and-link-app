import { ScrollView, Text, View } from 'react-native';

import Button from '../components/atoms/button';
import Icon from '../components/atoms/icon';
import Tag from '../components/atoms/tag';

export default function ViewItemScreen() {
  return (
    <View className='justify-center items-center relative'>
      <ScrollView className='mb-6'>
        <View className='w-screen h-80 rounded-b-xl bg-darkGreen' />

        <View className='flex flex-col mx-6'>
          <Tag type='book' />
          <Text className='text-black text-xl'>Livros</Text>
          <Text className='text-black text-sm text-justify'>
            Encontrei no terminal, perto do Marituba.
          </Text>

          <View className='flex flex-row my-6'>
            <Text className='text-black text-sm'>Achado por: </Text>
            <Text className='text-darkGreen text-sm ml-2'>Awlana Costa</Text>
          </View>

          <View>
            <View className='flex flex-row'>
              <Icon color='black' icon='map' size='small' />
              <Text className='text-black ml-2 text-sm'>Local:</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className='mb-20 fixed'>
        <Button text='Reivindicar Item' />
      </View>
    </View>
  );
}
