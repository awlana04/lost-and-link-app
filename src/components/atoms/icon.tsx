import { Feather } from '@expo/vector-icons';

import { IconType } from '@/src/types/icontype';

export default function Icon(props: IconType) {
  return (
    <Feather
      name={props.icon}
      color={
        (props.color === 'black' && '#000000') ||
        (props.color === 'green' && '#3DDB8F') ||
        (props.color === 'white' && '#FFFFFF') ||
        '#FFFFFF'
      }
      size={props.size === 'small' ? 16 : 32}
    />
  );
}
