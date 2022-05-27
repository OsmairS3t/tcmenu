import React, { useState } from 'react';
import { IIngredient } from '../../utils/interface';

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
    itemIngredient: IIngredient;
    onPress: () => void;
}

export function ItemConference({itemIngredient, onPress}: Props) {
    const [amountS, setAmountS] = useState(itemIngredient.amountstock);
    const [statusNecessary, setStatusNecessary] = useState(itemIngredient.isnecessary);

    function handleSetPlusAmountStock(valueAmount: number) {
        const val = valueAmount + 1;
        setAmountS(val);
        console.log(val)
        if (itemIngredient.amountstock < itemIngredient.amountnecessary) {
            setStatusNecessary(true);
        } else {
            setStatusNecessary(false);
        }
        itemIngredient.isnecessary = statusNecessary;
        console.log("mais: "+statusNecessary)
    }

    function handleSetMinusAmountStock(valueAmount: number) {
        const val = valueAmount - 1;
        setAmountS(val);
        if (itemIngredient.amountstock < itemIngredient.amountnecessary) {
            setStatusNecessary(true);
        } else {
            setStatusNecessary(false);
        }
        itemIngredient.isnecessary = statusNecessary;
        console.log("menos: "+statusNecessary)
    }

    return (
        <Container amountNecessary={itemIngredient.amountnecessary} amountStock={amountS} isNecessary={itemIngredient.isnecessary}>
            <Title>{itemIngredient.name}</Title>
            <GroupButtonStatus>
                <ButtonIdeal onPress={onPress}>
                    <DescriptionAmount>Ideal: { itemIngredient.amountnecessary }</DescriptionAmount>
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

