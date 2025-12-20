import {
    CardGrid,
    Card,
    IconWrapper,
    CardText,
} from "./styles";

const cards = [
    { icon: "ri-paint-fill" },
    { icon: "ri-send-plane-fill" },
    { icon: "ri-football-fill" },
    { icon: "ri-pencil-fill" },
];

export function Cards() {
    return (
        <CardGrid>
            {cards.map((card, index) => (
                <Card key={index}>
                    <IconWrapper>
                        <i className={card.icon}></i>
                    </IconWrapper>

                    <CardText>
                        Atividades pedagógicas pensadas para estimular a criatividade e a
                        autonomia. Atividades pedagógicas pensadas para estimular a
                        criatividade e a autonomia.
                    </CardText>
                </Card>
            ))}
        </CardGrid>
    );
}
