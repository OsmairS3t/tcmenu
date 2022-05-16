import React, {useState} from "react";
import { Header } from "../../components/Header";
import {
    Container,
    ListItem,
    TextListItem,
    IconListBlockItem,
    IconListItem,
} from './styles';

export function BuyList() {
    const [isClicked, setIsClicked] = useState(false);
    
    function handleClickBuy() {
        setIsClicked(!isClicked);
    }

    return (
        <Container>
            <Header title="Lista de Compras" />
            <ListItem>
                <TextListItem isClicked={isClicked}>Batata</TextListItem>
                <IconListBlockItem onPress={handleClickBuy}>
                    <IconListItem name={isClicked ? 'square' : 'check-square'} size={30} />
                </IconListBlockItem>
            </ListItem>
        </Container>
    )
}