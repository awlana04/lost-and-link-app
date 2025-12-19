import { useForm } from 'react-hook-form';
import { ScrollView, TextInput, View } from 'react-native';

import { useRef } from 'react';
import Button from '../components/atoms/button';
import Input from '../components/atoms/input';
import Label from '../components/molecules/label';
import ScreenTitle from '../components/molecules/screen-title';

export default function CreateAccountScreen() {
  const { control, handleSubmit } = useForm();

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const registrationNumberRef = useRef<TextInput>(null);

  const handleNextStep = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <ScreenTitle title='Criar Conta' hasIcon={true} />

      <ScrollView className='mb-44'>
        <View>
          <View className='ml-6'>
            <Label labelName='Nome:' icon='user' />
            <Input
              ref={nameRef}
              formProps={{ name: 'name', control }}
              inputProps={{
                placeholder: 'Ex.: Joane Doane',
                onSubmitEditing: () => emailRef.current?.focus(),
                returnKeyType: 'next',
              }}
            />

            <Label labelName='E-mail:' icon='mail' />
            <Input
              ref={emailRef}
              formProps={{ name: 'email', control }}
              inputProps={{
                placeholder: 'Ex.: joane.doane@itec.ufpa.br',
                onSubmitEditing: () => passwordRef.current?.focus(),
                returnKeyType: 'next',
              }}
            />

            <Label labelName='Senha:' icon='key' />
            <Input
              ref={passwordRef}
              formProps={{ name: 'password', control }}
              inputProps={{
                placeholder: 'Ex.: 12345678',
                onSubmitEditing: () => confirmPasswordRef.current?.focus(),
                returnKeyType: 'next',
              }}
            />

            <Label labelName='Confirmar Senha:' icon='key' />
            <Input
              ref={confirmPasswordRef}
              formProps={{ name: 'confirmPassword', control }}
              inputProps={{
                placeholder: 'Ex.: 12345678',
                onSubmitEditing: () => registrationNumberRef.current?.focus(),
                returnKeyType: 'next',
              }}
            />

            <Label labelName='Número de Matrícula:' icon='credit-card' />
            <Input
              ref={registrationNumberRef}
              formProps={{ name: 'registrationNumber', control }}
              inputProps={{
                placeholder: 'Ex.: 202500010000',
                onSubmitEditing: handleSubmit(handleNextStep),
                returnKeyType: 'next',
              }}
            />

            <Label labelName='Curso:' icon='clipboard' />
          </View>

          <View className='justify-center items-center mt-4'>
            <Button text='Criar Conta' onPress={handleSubmit(handleNextStep)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
