import { View } from 'react-native';

import Label from '../components/molecules/label';
import ScreenTitle from '../components/molecules/screen-title';

export default function CreateAccountScreen() {
  return (
    <View>
      <ScreenTitle title='Criar Conta' hasIcon={true} />

      <View className='ml-6'>
        <Label labelName='Nome:' name='user' />
        <Label labelName='E-mail:' name='mail' />
        <Label labelName='Senha:' name='key' />
        <Label labelName='Confirmar Senha:' name='key' />
        <Label labelName='Número de Matrícula:' name='credit-card' />
        <Label labelName='Curso:' name='clipboard' />
      </View>
    </View>
  );
}
