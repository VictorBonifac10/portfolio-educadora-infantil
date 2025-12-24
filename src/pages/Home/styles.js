import { styled } from 'styled-components'
import bgImage from '../../assets/background.jpg'

//-----------------Body
export const Body = styled.body`
background: linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.95)), url(${bgImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

//-----------------TopContainer
export const TopContainer = styled.div`
width: 100%;
height: 100vh; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;

//-----------------Imagem do TopContainer
#person{
  position: absolute;
  z-index: 2;
  width: 10rem;

  @media (min-width: 360px) {
    width: 18rem;
  }

  @media (min-width: 430px) {
    width: 21rem;
  }
    
  @media (min-width: 800px) {
    margin-left: 35rem;
    width: 26rem;
  }
}
`;

//-----------------Banner
export const Banner = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 8rem;
padding: 1rem;
width: 100%;
height: 100vh;

  @media (min-width: 600px) {
    flex-direction: row; 
    justify-content: space-between;
    padding: 0rem 3rem;
    text-align: start;
    margin: 0rem;
  }

//-----------------Letras animadas
.jump span {
  display: inline-block;
  animation: jump 2.7s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
  font-size: 2.2rem;
  color:  ${({ theme }) => theme.purple};
  font-family: 'Cabin Sketch', cursive;

  @media (min-width: 430px) {
    font-size: 3.3rem;
  }
  
  @media (min-width: 600px) {
    font-size: 6rem;
    line-height: 4rem;
  }
}

//-----------------Espaço entre as palavras
.jump .space {
  animation: none;
  width: 0.2ch;
}

//-----------------Animação
@keyframes jump {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-14px);
  }
}

//-----------------Acessibilidade
@media (prefers-reduced-motion: reduce) {
  .jump span {
    animation: none;
  }
}

//-----------------Subtitulo do TopContainer
  span{
    color:  ${({ theme }) => theme.purple};
    font-size: 0.8rem;

    @media (min-width: 600px) { //desktop
      font-size: 1.3rem;
      padding-left: 0.3rem ;
    } 
  }

//-----------------Descrição do TopContainer
  p{
    max-width: 100%;
    font-size: 0.8rem;
    margin: 0;

    @media (min-width: 600px) {
      font-size: 1.1rem;
      max-width: 35rem;
      padding-left: 0.3rem ;
    } 
  }

//-----------------Imagem de fundo
img{
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
}

//-----------------Gradiente acima da imagem
#mask{
    background: linear-gradient(
    50deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(250, 231, 255, 0.9) 60%,
    rgba(255, 255, 255, 0.21) 90%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

//-----------------First Content
#firstContent{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    gap: 1rem;

    @media (min-width: 600px) {
      gap: 1.8rem;
      align-items: start;
      justify-content: start;
    } 

    article{
      display: flex;
      justify-content: center;
      gap: 0.5rem;

      @media (min-width: 600px) { //desktop
        justify-content: flex-start;
      }   
    }
}

//-----------------Second Content
#secondContent{
    display: flex;
    gap: 1rem;
    position: relative;
    margin: 1rem;
    z-index: 2;

    @media (min-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }

//-----------------Link
    a{
      text-decoration: none;
    }

//-----------------Icones
    svg{
      background-color: ${({ theme }) => theme.purple};
      color:  ${({ theme }) => theme.white};
      font-size: 1.5rem;
      border-radius: 50px;
      transition: 1s all;
      padding: 0.4rem;

      &:hover{ //Effect
        color: ${({ theme }) => theme.purple};
        background-color: ${({ theme }) => theme.white};
      }

      @media (min-width: 600px) { //desktop
        font-size: 2.3rem;
      }
    }
}
`;

//-----------------Transição entre TopContainer e Main
export const GradientEffect = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -3rem;
    left: 0;
    width: 100%;
    height: 6rem;
    z-index: 2;

    background: linear-gradient(
      transparent 0%,
      rgba(255,255,255,1) 50%,
      transparent 100%
    );
  }
`;

//-----------------Main
export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
`;

//-----------------Texto 
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  padding: 1rem;

  p{
    @media (min-width: 600px) { //desktop
      max-width: 50%;
    }
  }
`;

//-----------------Phrase Container
export const PhraseContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color:  ${({ theme }) => theme.purple};
color:  ${({ theme }) => theme.white};
font-style: italic; 
padding: 3rem;
position: relative;
margin: 5rem 0rem;

  h3{
    font-size: 0.9rem;
  }
`;

//-----------------Container Base/Geral
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
height: auto;

//-----------------Imagem da seção Sobre
.aboutImage{
  width: 20rem;
  margin: 1rem;
  padding: 0.7rem;
  border-radius: 1.3rem;

  @media (min-width: 600px) {
     width: 40rem;
  }
}

`;
