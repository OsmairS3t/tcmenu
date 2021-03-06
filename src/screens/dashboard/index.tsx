import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonSend } from '../../components/Form/Button';

import {
  Container,
  Header,
  Logo,
  Content
} from './styles';

export function Dashboard() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Content>
        <ButtonSend width={350} title='Entrar' onPress={()=>navigation.navigate('approutes')} />
      </Content>
      <Logo source={require('../../assets/logotipo.png')} />
    </Container>
  )
}