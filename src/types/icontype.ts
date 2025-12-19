import { Feather } from '@expo/vector-icons';

export type IconNamesType = {
  icon: keyof typeof Feather.glyphMap;
};

export type IconType = IconNamesType & {
  color: 'white' | 'black' | 'green';
  size: 'small' | 'large';
};
