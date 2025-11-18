import { Text, View } from 'react-native';

import { IconNamesType } from '@/src/types/icontype';

import Icon from '../atoms/icon';

type SectionProps = IconNamesType & {
  text: string;
  color: 'lightGreen' | 'darkGreen';
};

export default function Section(props: SectionProps) {
  return (
    <View
      className={`w-64 h-16 pl-6 flex flex-row items-center rounded-tr-2xl rounded-br-2xl ${props.color === 'lightGreen' ? 'bg-lightGreen' : 'bg-darkGreen'}`}
    >
      <Icon
        {...props}
        color={props.color === 'darkGreen' ? 'white' : 'black'}
        size='large'
      />
      <Text
        className={`text-2xl ml-4 ${props.color === 'lightGreen' ? 'text-black' : 'text-white'}`}
      >
        {props.text}
      </Text>
    </View>
  );
}
