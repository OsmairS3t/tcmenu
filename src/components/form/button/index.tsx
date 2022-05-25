import React from 'react';
import { ButtonProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface Props extends ButtonProps {
  title: string;
  width?: number;
}

export function ButtonSend({title, width, ...rest}: Props) {
  return (
    <Container style={{width: width}} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}