import styled from "styled-components";

//-----------------Link
export const Link = styled.a`
background-color: ${({ theme, variant }) => variant === "secondary" ? "transparent" : theme.purple};
border: 1px solid ${({ theme, variant }) => variant === "secondary" ? theme.purple : "transparent"};
color: ${({ theme, variant }) => variant === "secondary" ? theme.purple : theme.white};
border-radius: 50px;
padding: 0.3rem 0.8rem;
text-decoration: none;
font-size: 0.7rem;
transition: 0.5s all;
cursor: pointer;

&:hover{
    background-color: ${({ theme, variant }) => variant === "secondary" ? theme.purple : "transparent"};
    border: 1px solid ${({ theme, variant }) => variant === "secondary" ? "transparent" : theme.purple};
    color: ${({ theme, variant }) => variant === "secondary" ? theme.white : theme.purple};
}

    @media (min-width: 600px) { //desktop
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
    }
`