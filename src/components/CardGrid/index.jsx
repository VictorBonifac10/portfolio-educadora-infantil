import {
    CardGrid,
    Card,
    IconWrapper,
    CardText,
    Title
} from "./styles";

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PaletteIcon from '@mui/icons-material/Palette';

const cards = [
    {
        icon: <EmojiObjectsIcon />,
        title: "Estímulo Cognitivo",
        description: "Atividades planejadas para estimular atenção, memória, raciocínio lógico e resolução de problemas, respeitando a faixa etária e o ritmo individual."
    },
    {
        icon: <VolunteerActivismIcon />,
        title: "Estímulo Sensorial e Motor",
        description: "Propostas que envolvem coordenação motora fina e ampla, percepção tátil, visual e auditiva, favorecendo o desenvolvimento corporal e sensorial."
    },
    {
        icon: <ChatBubbleIcon />,
        title: "Evolução Socioemocional",
        description: "Vivências que promovem a construção da autonomia, empatia, autorregulação emocional e habilidades de convivência."

    },
    {
        icon: <PaletteIcon />,
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
