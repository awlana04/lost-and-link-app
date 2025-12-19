import { forwardRef } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { TextInput, TextInputProps, View } from 'react-native';

type InputProps = {
  inputProps: TextInputProps;
  formProps: UseControllerProps;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ formProps, inputProps }, ref) => {
    return (
      <Controller
        {...formProps}
        render={({ field }) => (
          <View className='h-16 w-96 p-2 bg-lightGreen rounded-2xl justify-center pl-4 mb-4'>
            <TextInput
              ref={ref}
              {...inputProps}
              value={field.value}
              onChangeText={field.onChange}
              className='placeholder:text-darkGreen'
            />
          </View>
        )}
      />
    );
  }
);

export default Input;
