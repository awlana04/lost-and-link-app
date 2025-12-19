import { Text, TouchableOpacity, View } from 'react-native';

type RadioButtonPropsType = {
  isSelected: boolean;
  setIsSelected(value: boolean): void;
  falseRadioButtonText: string;
  trueRadioButtonText: string;
};

export default function RadioButton(props: RadioButtonPropsType) {
  return (
    <View className='flex flex-row justify-center items-center gap-6 my-4'>
      <TouchableOpacity
        className={`w-28 h-16 rounded-2xl ${!props.isSelected ? 'bg-darkGreen' : 'bg-lightGreen'}  flex items-center justify-center`}
        onPress={() => props.setIsSelected(false)}
      >
        <Text
          className={`text-xl ${!props.isSelected ? 'text-black' : 'text-darkGreen'}`}
        >
          {props.falseRadioButtonText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`w-28 h-16 rounded-2xl ${props.isSelected ? 'bg-darkGreen' : 'bg-lightGreen'}  flex items-center justify-center`}
        onPress={() => props.setIsSelected(true)}
      >
        <Text
          className={`text-xl ${props.isSelected ? 'text-black' : 'text-darkGreen'}`}
        >
          {props.trueRadioButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
