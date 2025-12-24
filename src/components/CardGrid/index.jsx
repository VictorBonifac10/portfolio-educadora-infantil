import {
    CardGrid,
    Card,
    IconWrapper,
    CardText,
    Title
} from "./styles";

import { cards } from '../../data/cards' 

export function Cards() {
    return (
        <CardGrid>
            {cards.map((card, index) => (
                <Card key={index}>
                    <IconWrapper>
                        {card.icon}
                    </IconWrapper>
                    <Title>{card.title}</Title>
                    <CardText>
                        {card.description}
                    </CardText>
                </Card>
            ))}
        </CardGrid>
    );
}
