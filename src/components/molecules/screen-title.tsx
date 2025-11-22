import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '../atoms/icon';

type ScreenTitlePropsType = {
  title: string;
  hasIcon?: boolean;
};

export default function ScreenTitle(props: ScreenTitlePropsType) {
  return (
    <View className='w-full h-24 rounded-b-2xl bg-darkGreen px-6 mb-6'>
      <View className='mt-10 flex flex-row items-center justify-between'>
        <Text className='text-3xl ml-6 text-black'>{props.title}</Text>

        {props.hasIcon && (
          <TouchableOpacity>
            <Icon color='black' name='x' size='large' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
