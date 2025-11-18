import { View } from 'react-native';

import Section from '../components/molecules/section';

export default function HomeScreen() {
  return (
    <View>
      <Section color='darkGreen' name='frown' text='Perdidos' />
      <Section color='lightGreen' name='smile' text='Achados' />
    </View>
  );
}
