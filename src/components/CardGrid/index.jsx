import {
    CardGrid,
    Card,
    IconWrapper,
    CardText,
    Title
} from "./styles";

const cards = [
    {
        icon: "ri-brain-fill",
        title: "Estímulo Cognitivo",
        description: "Atividades planejadas para estimular atenção, memória, raciocínio lógico e resolução de problemas, respeitando a faixa etária e o ritmo individual."
    },
    {
        icon: "ri-hand-heart-fill",
        title: "Estímulo Sensorial e Motor",
        description: "Propostas que envolvem coordenação motora fina e ampla, percepção tátil, visual e auditiva, favorecendo o desenvolvimento corporal e sensorial."
    },
    {
        icon: "ri-chat-3-fill",
        title: "Evolução Socioemocional",
        description: "Vivências que promovem a construção da autonomia, empatia, autorregulação emocional e habilidades de convivência."

    },
    {
        icon: "ri-palette-fill",
        title: "Linguagem e Expressão",
        description: "Atividades que estimulam a comunicação oral, a imaginação e a expressão por meio da música, histórias, artes e brincadeiras simbólicas."
    },
];

export function Cards() {
    return (
        <CardGrid>
            {cards.map((card, index) => (
                <Card key={index}>
                    <IconWrapper>
                        <i className={card.icon}></i>
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
