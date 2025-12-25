import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';

import Button from '@/src/components/atoms/button';
import Input from '@/src/components/atoms/input';
import Label from '@/src/components/molecules/label';
import ScreenTitle from '@/src/components/molecules/screen-title';

export default function FirstForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const handleNextStep = (data: { name: string; email: string }) => {
    console.log(data);

    if (data.name.length < 3) {
      setError('name', {
        message: 'O nome deve conter no mínimo 3 caracteres.',
      });
    }

    const mailDomain = data.email.match('ufpa.br');

    if (mailDomain === null) {
      setError('email', {
        message: 'Você deve utilizar o e-mail institucional.',
      });
    }

    // router.push('/second-form');
  };

  return (
    <View className='mb-44'>
      <ScreenTitle title='Criar Conta' />

      <View className='items-center'>
        <View>
          <Label labelName='Nome:' icon='user' />
          <Input
            ref={nameRef}
            formProps={{
              name: 'name',
              control,
              rules: { required: 'Nome é obrigatório!' },
            }}
            inputProps={{
              placeholder: 'Ex.: Joane Doane',
              onSubmitEditing: () => emailRef.current?.focus(),
              returnKeyType: 'next',
            }}
            errorMessage={errors.name?.message}
          />
        </View>
      </View>

      <View className='items-center'>
        <View>
          <Label labelName='E-mail:' icon='mail' />
          <Input
            ref={emailRef}
            formProps={{
              name: 'email',
              control,
              rules: {
                required: 'É necessário inserir um e-mail institucional.',
              },
            }}
            inputProps={{
              placeholder: 'Ex.: joane.doane@itec.ufpa.br',
              onSubmitEditing: handleSubmit(handleNextStep),
              returnKeyType: 'next',
            }}
            errorMessage={errors.email?.message}
          />
        </View>
      </View>

      <View className='justify-center items-center mt-4'>
        <Button text='Prosseguir' onPress={handleSubmit(handleNextStep)} />
      </View>
    </View>
  );
}
