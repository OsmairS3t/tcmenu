import React from 'react';
import { ButtonSend } from '../../components/form/button';

import {
  Container,
  Header,
  Logo,
  Content
} from './styles';

//const logo = '../../assets/logotipo.png';

export function Dashboard() {
  return (
    <Container>
      <Logo source={require('../../assets/logotipo.png')} />
      <Header />
      <Content>
        <ButtonSend title='Entrar' onPress={()=>{}} />
      </Content>
    </Container>
  )
}