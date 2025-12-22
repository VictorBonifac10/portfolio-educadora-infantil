import styled from 'styled-components'

export const ContactContainer = styled.div`

display: flex;
flex-direction: column;
position: relative;
align-items: center;
justify-content: center;
text-align: center;
padding: 1rem;
width: 100%;
height: 100vh; //revisar

img{
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh; //revisar
}

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

`