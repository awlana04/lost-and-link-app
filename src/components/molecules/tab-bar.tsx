import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import Icon from '../atoms/icon';

export default function TabBar(props: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View className='bg-lightGreen fixed h-36 rounded-t-2xl'>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View key={route.name}>
            <PlatformPressable
              id={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View className='flex flex-row gap-24 justify-center items-center mt-4'>
                <TouchableOpacity>
                  <Icon color='black' name='settings' size='large' />
                </TouchableOpacity>
                <TouchableOpacity className='w-16 h-16 -top-10 rounded-2xl bg-darkGreen items-center justify-center'>
                  <Icon color='black' name='plus-circle' size='large' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon color='black' name='image' size='large' />
                </TouchableOpacity>
              </View>
            </PlatformPressable>
          </View>
        );
      })}
    </View>
  );
}
