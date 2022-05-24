import React, { useState } from 'react';

import {
    Container,
    Title,
    ButtonIdeal,
    DescriptionAmount,
    GroupButtonStatus,
    ButtonsAction,
    Buttons,
    IconButtonPlus,
    IconButtonLess,
} from './styles';

interface Props{
    itemName: string;
    amountNecessary: number;
    amountStock: number;
    onPress: () => void;
}

export function ItemConference({itemName, amountNecessary, amountStock, onPress}: Props) {
    const [amountS, setAmountS] = useState(amountStock);

    function handleSetPlusAmountStock(valueAmount: number) {
        setAmountS(++valueAmount);
    }

    function handleSetMinusAmountStock(valueAmount: number) {
        setAmountS(--valueAmount);
    }

    return (
        <Container amountNecessary={amountNecessary} amountStock={amountS}>
            <Title>{itemName}</Title>
            <GroupButtonStatus>
                <ButtonIdeal onPress={onPress}>
                    <DescriptionAmount>Ideal: { amountNecessary }</DescriptionAmount>
                </ButtonIdeal>
                <ButtonsAction>
                    <DescriptionAmount>Total: { amountS }</DescriptionAmount>
                    <Buttons onPress={() => handleSetMinusAmountStock(amountS)}>
                        <IconButtonLess name='minus-square' size={30} />
                    </Buttons>
                    <Buttons onPress={() => handleSetPlusAmountStock(amountS)}>
                        <IconButtonPlus name='plus-square' size={30} />
                    </Buttons>
                </ButtonsAction>
            </GroupButtonStatus>
        </Container>
    )
}

