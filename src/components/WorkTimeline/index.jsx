import Typography from "@mui/material/Typography"; //revisar
import {
    TimelineWrapper,
    StyledTimelineItem,
    StyledOppositeContent,
    StyledSeparator,
    StyledDot,
    StyledContent
} from "./styles";

export function WorkTimeline() {
    return (
        <TimelineWrapper position="alternate">

            <StyledTimelineItem>
                <StyledOppositeContent align="right">
                    2025
                </StyledOppositeContent>

                <StyledSeparator>
                    <StyledDot>
                        <i className="ri-graduation-cap-fill"></i>
                    </StyledDot>
                </StyledSeparator>

                <StyledContent>
                    <Typography variant="h4">Auxiliar Docente</Typography>
                    <Typography variant="h5">Colégio Leão</Typography>
                    <Typography component="p">
                        Atividades pedagógicas pensadas para estimular a criatividade
                        e a autonomia no desenvolvimento infantil.
                    </Typography>
                </StyledContent>
            </StyledTimelineItem>

            <StyledTimelineItem>
                <StyledOppositeContent align="right">
                    2024 - 2025
                </StyledOppositeContent>

                <StyledSeparator>
                    <StyledDot>
                        <i className="ri-user-heart-fill"></i>
                    </StyledDot>
                </StyledSeparator>

                <StyledContent>
                    <Typography variant="h4">Babá</Typography>
                    <Typography variant="h5">Gêmeos</Typography>
                    <Typography component="p">
                        Cuidado diário, estímulos cognitivos, atividades lúdicas
                        e acompanhamento do desenvolvimento.
                    </Typography>
                </StyledContent>
            </StyledTimelineItem>

        </TimelineWrapper>
    );
}
