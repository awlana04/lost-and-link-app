import { Text, View } from 'react-native';

import { IconNamesType } from '@/src/types/icontype';

import Icon from '../atoms/icon';

type LabelPropsType = IconNamesType & {
  labelName: string;
};

export default function Label(props: LabelPropsType) {
  return (
    <View className='flex flex-row gap-4 my-4 mt-2'>
      <Icon name={props.name} color='black' size='small' />
      <Text className='font-medium text-sm text-black'>{props.labelName}</Text>
    </View>
  );
}
