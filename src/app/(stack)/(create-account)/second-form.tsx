import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';

import Button from '@/src/components/atoms/button';
import Input from '@/src/components/atoms/input';
import Label from '@/src/components/molecules/label';
import ScreenTitle from '@/src/components/molecules/screen-title';

export default function SecondForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const handleNextStep = (data: any) => {
    console.log(data);

    router.push('/third-form');
  };

  return (
    <View className='mb-44'>
      <ScreenTitle title='Criar Conta' hasIcon={true} />

      <View className='items-center'>
        <View>
          <Label labelName='Senha:' icon='key' />
          <Input
            ref={passwordRef}
            formProps={{
              name: 'password',
              control,
              rules: {
                required: 'Sua senha deve conter no mínimo 8 dígitos.',
              },
            }}
            inputProps={{
              placeholder: 'Ex.: 12345678',
              onSubmitEditing: () => confirmPasswordRef.current?.focus(),
              returnKeyType: 'next',
            }}
            errorMessage={errors.password?.message}
          />
        </View>
      </View>

      <View className='items-center'>
        <View>
          <Label labelName='Confirmar Senha:' icon='key' />
          <Input
            ref={confirmPasswordRef}
            formProps={{
              name: 'confirmPassword',
              control,
              rules: { required: 'Suas senhas tem que serem compatíveis!' },
            }}
            inputProps={{
              placeholder: 'Ex.: 12345678',
              onSubmitEditing: handleSubmit(handleNextStep),
              returnKeyType: 'next',
            }}
            errorMessage={errors.confirmPassword?.message}
          />
        </View>
      </View>

      <View className='justify-center items-center mt-4'>
        <Button text='Prosseguir' onPress={handleSubmit(handleNextStep)} />
      </View>
    </View>
  );
}
