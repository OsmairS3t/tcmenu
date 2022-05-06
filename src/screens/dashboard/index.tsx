import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { ButtonSend } from '../../components/form/button';

import {
  Container,
  Header,
  Logo,
  Content
} from './styles';

import { AppRoutes } from '../../routes/app.routes';
//const logo = '../../assets/logotipo.png';

export function Dashboard() {
  const navigation = useNavigation();
  function goAhead() {
    //navigation.navigate(AppRoutes);
  }
  
  return (
    <Container>
      <Header />
      <Content>
        <ButtonSend title='Entrar' onPress={()=>{}} />
      </Content>
      <Logo source={require('../../assets/logotipo.png')} />
    </Container>
  )
}