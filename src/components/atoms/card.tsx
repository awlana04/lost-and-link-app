import { Text, View } from 'react-native';

type CardType = {
  title: string;
  description: string;
};

export default function Card(props: CardType) {
  return (
    <View className='w-96 h-24 rounded-2xl flex flex-row items-center bg-lightGreen pr-4 m-2'>
      <View className='w-24 h-24 rounded-2xl bg-darkGreen'></View>
      <View className='flex flex-col my-2 ml-4'>
        <Text className='text-darkGreen text-xl'>{props.title}</Text>
        <Text className='text-black text-lg'>{props.description}</Text>
      </View>
    </View>
  );
}
