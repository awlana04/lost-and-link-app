import { Dimensions, Text, View } from 'react-native';

type CardType = {
  title: string;
  description: string;
};

export default function Card(props: CardType) {
  return (
    <View
      className={`${Dimensions.get('screen').width > 400 ? 'w-4/5 h-36' : 'w-96 h-24'} rounded-2xl flex flex-row items-center bg-lightGreen pr-4 m-2`}
    >
      <View
        className={`${Dimensions.get('screen').width > 400 ? 'w-36 h-36' : 'w-24 h-24'} rounded-2xl bg-darkGreen`}
      ></View>
      <View className='flex flex-col my-2 ml-4'>
        <Text
          className={`text-darkGreen ${Dimensions.get('screen').width > 400 ? 'text-3xl mb-2' : 'text-xl'}`}
        >
          {props.title}
        </Text>
        <Text
          className={`text-black w-64 ${Dimensions.get('screen').width > 400 ? 'text-xl' : 'text-lg'}`}
        >
          {props.description.length > 48
            ? props.description.substring(0, 48) + '...'
            : props.description}
        </Text>
      </View>
    </View>
  );
}
