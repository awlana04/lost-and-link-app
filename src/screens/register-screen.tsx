import { Text, TouchableOpacity, View } from 'react-native';

import Section from '../components/molecules/section';

export default function RegisterScreen() {
  return (
    <View>
      <View className='flex flex-row justify-center items-center gap-6 mt-16 mb-6'>
        <TouchableOpacity className='w-28 h-16 rounded-2xl bg-lightGreen flex items-center justify-center'>
          <Text className='text-xl text-darkGreen'>Achei</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-28 h-16 rounded-2xl bg-darkGreen flex items-center justify-center'>
          <Text className='text-xl text-black'>Perdi</Text>
        </TouchableOpacity>
      </View>

      <Section
        iconDirection='right'
        color='blackDarkGreen'
        name='chevron-down'
        text='Tipo de Item'
      />
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        name='hash'
        text='Comente Algo'
      />
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        name='image'
        text='Fotos'
      />
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        name='map'
        text='Último Local do Item'
        largeWidth={true}
      />
    </View>
  );
}
