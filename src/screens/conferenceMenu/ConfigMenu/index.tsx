import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputForm } from '../../../components/Form/InputForm';
import { Header } from '../../../components/Header';
import { HeaderPage } from '../../../components/HeaderPage';

import {
    Container,
    Form,
    Fields,
    Field,
    TextLabel
} from './styles';
import { ButtonSend } from '../../../components/Form/Button';

const schema = Yup.object().shape({
    amountStock: Yup.number().required('É necessário informar a quantidade.')
});

interface ConfigProps{
    amountStock: number;
}

interface Props {
    CloseModal: () => void;
}

export function ConfigMenu({CloseModal}: Props) {
    const { handleSubmit, control, formState: {errors}, reset
          } = useForm<ConfigProps>({resolver: yupResolver(schema)});

    function handleSubmitConfigMenu(data: ConfigProps) {
        console.log(data);
        reset();
    }

    return (
        <Container>
            <Header title="Conferência de Menu" />
            <HeaderPage titlePage="Configurar Quant. ideal" onPress={CloseModal} iconButton="corner-up-left" />
            <Form>
                <Fields>
                    <Field size={250}>
                        <TextLabel>Batata Frita</TextLabel>
                    </Field>
                    <Field size={100}>
                        <InputForm 
                            name="amountStock" 
                            control={control} 
                            keyboardType="numeric"
                        />
                    </Field>
                </Fields>
                <ButtonSend title="Gravar" onPress={handleSubmit(handleSubmitConfigMenu)} />
            </Form>
        </Container>
    )
}