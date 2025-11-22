import { ScrollView, View } from 'react-native';

import Card from '../components/atoms/card';
import LoadMore from '../components/atoms/load-more';

import SearchBar from '../components/molecules/search-bar';
import Section from '../components/molecules/section';

export default function HomeScreen() {
  return (
    <View>
      <View className='items-center'>
        <SearchBar />
      </View>
      <ScrollView className='mb-44'>
        <View>
          <Section
            color='darkGreen'
            name='frown'
            iconDirection='left'
            text='Perdidos'
          />
          <View className='items-center'>
            <Card
              title='Planta'
              description='Perdi hoje após uma apresentação no ICB, ela precisa dos meus cuidados, por favor, alguém me ajuda!!'
            />
            <Card
              title='Calculadora Científica'
              description='Perdi hoje no Projeto Newton, sou de Telecom, alguém me ajuda, sério, essas integrais me matam ;('
            />

            <LoadMore />
          </View>
        </View>
        <View className='mt-6'>
          <Section
            color='lightGreen'
            name='smile'
            iconDirection='left'
            text='Achados'
          />
          <View className='items-center'>
            <Card
              title='Bolsa'
              description='Encontrei na faculdade de Engenharia de Telecomunicações.'
            />
            <Card
              title='Caderno'
              description='Tava na sala Telecom 201, encontrei hoje.'
            />

            <LoadMore />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
