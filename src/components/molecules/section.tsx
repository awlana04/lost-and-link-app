import { Text, View } from 'react-native';

import { IconNamesType } from '@/src/types/icontype';

import Icon from '../atoms/icon';

type SectionProps = IconNamesType & {
  iconDirection: 'right' | 'left';
  text: string;
  color: 'lightGreen' | 'darkGreen' | 'blackDarkGreen';
  largeWidth?: boolean;
};

export default function Section(props: SectionProps) {
  return (
    <View
      className={`${props.largeWidth ? 'w-80' : 'w-64'} h-16 pl-6 flex flex-row my-2 items-center rounded-tr-2xl rounded-br-2xl ${props.color === 'lightGreen' ? 'bg-lightGreen' : 'bg-darkGreen'}`}
    >
      {props.iconDirection === 'left' && (
        <Icon
          icon={props.icon}
          color={props.color === 'darkGreen' ? 'white' : 'black'}
          size='large'
        />
      )}
      <Text
        className={`text-2xl ml-4 ${props.color === 'darkGreen' ? 'text-white' : 'text-black'}`}
      >
        {props.text}
      </Text>
      {props.iconDirection === 'right' && (
        <Icon
          icon={props.icon}
          color={props.color === 'darkGreen' ? 'white' : 'black'}
          size='large'
        />
      )}
    </View>
  );
}
