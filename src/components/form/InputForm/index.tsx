import React from "react";
import { TextInputProps } from "react-native";
import { Controller, Control } from 'react-hook-form';

import { Input } from "../Input";

import {
    Container,
    Label,
    Error
} from './styles';

interface Props extends TextInputProps {
    label?: string;
    name: string;
    control: Control<any>;
    error?: string;
}

export function InputForm({ name, control, label, error, ...rest }: Props) {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <Controller
                control={control}
                name={name}
                render={({field: {onChange,value} }) => (
                    <Input
                        onChangeText={onChange}
                        value={value as string}
                        {...rest}
                    />
                )}
                {...rest}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}