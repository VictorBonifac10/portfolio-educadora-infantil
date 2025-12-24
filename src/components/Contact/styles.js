import styled from 'styled-components'

//-----------------Container
export const ContactContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
justify-content: center;
text-align: center;
padding: 1rem;
width: 100%;
height: 100vh;
margin-top: 4rem;

//-----------------Background Image
img{
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
}

//-----------------Gradient
#mask{
    background: linear-gradient(
    50deg,
    rgba(228, 164, 255, 0.83) 30%,
    rgba(242, 193, 255, 0.38) 60%,
    rgba(235, 122, 255, 0.57) 90%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

//-----------------Card
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    background-color: #ffffffee;
    padding: 1rem 0.9rem;
    border-radius: 1rem;
    margin: 0.5rem;
    font-size: 0.95rem;
    line-height: 1rem;

    @media(min-width: 600px){
    width: 40%;
    height: 40%;
    line-height: 1.3rem;
    font-size: 1.2rem;
    }
}

//-----------------Link
a{
    background-color: ${({ theme }) => theme.purple};
    color: #fff;
    text-decoration: none;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    transition: 0.5s all;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    svg{
    font-size: 1.2rem;
    }

    &:hover{
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
    }
}
`;