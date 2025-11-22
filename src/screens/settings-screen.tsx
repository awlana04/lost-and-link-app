import { View } from 'react-native';
import Button from '../components/atoms/button';
import ScreenTitle from '../components/molecules/screen-title';

export default function SettingsScreen() {
  return (
    <View className='justify-center items-center gap-6'>
      <ScreenTitle title='Configurações' />

      <Button text='Mudar Senha' />
      <Button text='Deletar Conta' />
      <Button text='Sair do Aplicativo' />
    </View>
  );
}
