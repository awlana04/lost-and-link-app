import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonPropsType = TouchableOpacityProps & {
  text: string;
};

export default function Button(props: ButtonPropsType) {
  return (
    <TouchableOpacity
      {...props}
      className='w-72 h-16 rounded-2xl justify-center items-center bg-darkGreen'
    >
      <Text className='text-black text-lg'>{props.text}</Text>
    </TouchableOpacity>
  );
}
