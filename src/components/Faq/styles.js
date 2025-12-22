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
    color: #818181ff;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
}

svg {
    color: ${({ theme }) => theme.purple};
}

p{
    color: #3d3d3dff;
}

`;