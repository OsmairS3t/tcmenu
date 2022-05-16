import React, { useState } from 'react';

import {
    Container,
    Title,
    DescriptionAmount,
    GroupButtonStatus,
    ButtonsAction,
    Buttons,
    IconButtonPlus,
    IconButtonLess,
} from './styles';

interface Props{
    amountNecessary: number;
    amountStock: number;
}

export function ItemConference({amountNecessary, amountStock}: Props) {
    const [amountS, setAmountS] = useState(amountStock);

    function handleSetPlusAmountStock(valueAmount: number) {
        setAmountS(++valueAmount);
    }

    function handleSetMinusAmountStock(valueAmount: number) {
        setAmountS(--valueAmount);
    }

    return (
        <Container amountNecessary={amountNecessary} amountStock={amountS}>
            <Title>Batata Frita</Title>
            <GroupButtonStatus>
                <DescriptionAmount>Ideal: { amountNecessary }</DescriptionAmount>
                <ButtonsAction>
                    <DescriptionAmount>Total: { amountS }</DescriptionAmount>
                    <Buttons onPress={() => handleSetPlusAmountStock(amountS)}>
                        <IconButtonPlus name='plus-square' size={30} />
                    </Buttons>
                    <Buttons onPress={() => handleSetMinusAmountStock(amountS)}>
                        <IconButtonLess name='minus-square' size={30} />
                    </Buttons>
                </ButtonsAction>
            </GroupButtonStatus>
        </Container>
    )
}

