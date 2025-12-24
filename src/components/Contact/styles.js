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
    height: 100vh; //revisar
    z-index: 1;
}

//-----------------Card
section{
    position: absolute;
    z-index: 2;
    background-color: #ffffffee;
    padding: 2rem;
    border-radius: 1rem;
}

//-----------------Link
a{
    background-color: ${({ theme }) => theme.purple};
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 50px;
}
`;