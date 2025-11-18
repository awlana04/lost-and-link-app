import { Feather } from '@expo/vector-icons';

import { IconType } from '@/src/types/icontype';

export default function Icon(props: IconType) {
  return (
    <Feather
      name={props.name}
      color={
        (props.color === 'black' && '#000000') ||
        (props.color === 'green' && '##D4FFE5') ||
        (props.color === 'white' && '#FFFFFF') ||
        '#FFFFFF'
      }
      size={props.size === 'small' ? 24 : 32}
    />
  );
}
