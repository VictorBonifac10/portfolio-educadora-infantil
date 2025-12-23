import styled from "styled-components";

import Accordion from '@mui/material/Accordion';

export const AccordionContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0.5rem;

@media(min-width: 600px){
    margin: 1rem;
    padding: 1rem 5rem;
}
`;

export const AccordionCard = styled(Accordion)`

width: 100%;

h4{
    color: #7f7f7fff;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    padding: 0;
}

.question{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
}

.indice{
    background-color: ${({ theme }) => theme.purple};
    padding: 0.4rem 0.77rem;
    border-radius: 50px;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
}

svg {
    color: ${({ theme }) => theme.purple};
}

p{
    color: #3d3d3dff;
}

`;