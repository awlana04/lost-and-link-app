import { forwardRef } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

type InputProps = {
  inputProps: TextInputProps;
  formProps: UseControllerProps;
  errorMessage: string;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ formProps, inputProps, errorMessage = '' }, ref) => {
    return (
      <Controller
        {...formProps}
        render={({ field }) => (
          <View>
            <View
              className={`h-16 w-96 p-2 bg-lightGreen rounded-2xl justify-center pl-4 mb-4 ${errorMessage && 'border-2 border-red'} ${!errorMessage && field.value > 0 && 'border-2 border-darkGreen'}`}
            >
              <TextInput
                ref={ref}
                {...inputProps}
                value={field.value}
                onChangeText={field.onChange}
                className={`${errorMessage && 'text-red border-red placeholder:text-red'} placeholder:text-darkGreen`}
              />
            </View>

            {errorMessage.length > 0 && (
              <Text className='ml-4 mb-4 text-red text-sm font-bold'>
                {errorMessage}
              </Text>
            )}
          </View>
        )}
      />
    );
  }
);

export default Input;
