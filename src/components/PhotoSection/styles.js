import styled from "styled-components";

export const CardContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem; 
    margin: 3rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.purple};
    border-radius: 1rem;

img{
    width: 300px;
    object-fit: cover;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

p{
    color: #fff;
}
`;