import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';

import Button from '@/src/components/atoms/button';
import Input from '@/src/components/atoms/input';
import Label from '@/src/components/molecules/label';
import ScreenTitle from '@/src/components/molecules/screen-title';

export default function ThirdForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registrationNumberRef = useRef<TextInput>(null);

  const handleNextStep = (data: any) => {
    console.log(data);
    router.push('/');
  };

  return (
    <View className='mb-44'>
      <ScreenTitle title='Criar Conta' hasIcon={true} />

      <View className='items-center'>
        <View>
          <Label labelName='Número de Matrícula:' icon='credit-card' />
          <Input
            ref={registrationNumberRef}
            formProps={{
              name: 'registrationNumber',
              control,
              rules: { required: 'É necessário um número válido!' },
            }}
            inputProps={{
              placeholder: 'Ex.: 202500010000',
              onSubmitEditing: handleSubmit(handleNextStep),
              returnKeyType: 'next',
            }}
            errorMessage={errors.registrationNumber?.message}
          />
        </View>
      </View>

      <View className='items-center'>
        <View>
          <Label labelName='Curso:' icon='clipboard' />
        </View>
      </View>

      <View className='justify-center items-center mt-4'>
        <Button text='Criar Conta' onPress={handleSubmit(handleNextStep)} />
      </View>
    </View>
  );
}
