import styled from "styled-components";
import Accordion from '@mui/material/Accordion';

//-----------------Container
export const AccordionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0.5rem;

@media(min-width: 910px){
    margin: 1rem;
    padding: 1rem 5rem;
}
`;

export const AccordionCard = styled(Accordion)`
width: 100%;

//-----------------Text
h4{
    color: #7f7f7fff;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    padding: 0;
}

//-----------------Question
.question{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
}

//-----------------Indice
.indice{
    background-color: ${({ theme }) => theme.purple};
    padding: 0.4rem 0.77rem;
    border-radius: 50px;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
}

//-----------------Arrow Icon
svg {
    color: ${({ theme }) => theme.purple};
}

//-----------------Answer
p{
    color: #3d3d3dff;
}

`;