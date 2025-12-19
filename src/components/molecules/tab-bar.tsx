import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import { View } from 'react-native';

import Icon from '../atoms/icon';

export default function TabBar(props: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View className='bg-lightGreen fixed h-36 rounded-t-2xl justify-center items-center flex flex-row gap-20 pb-10'>
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
              {index === 0 && (
                <View>
                  <Icon
                    color={props.state.index === 0 ? 'green' : 'black'}
                    icon='search'
                    size='large'
                  />
                </View>
              )}

              {index === 1 && (
                <View className='w-16 h-16 -top-10 rounded-2xl bg-darkGreen items-center justify-center'>
                  <Icon
                    color={props.state.index === 1 ? 'white' : 'black'}
                    icon='plus-circle'
                    size='large'
                  />
                </View>
              )}

              {index === 2 && (
                <View>
                  <Icon
                    color={props.state.index === 2 ? 'green' : 'black'}
                    icon='settings'
                    size='large'
                  />
                </View>
              )}
            </PlatformPressable>
          </View>
        );
      })}
    </View>
  );
}
