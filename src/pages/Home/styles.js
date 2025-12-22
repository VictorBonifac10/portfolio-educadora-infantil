import { styled } from 'styled-components'
import bgImage from '../../assets/background.jpg'

export const Body = styled.body`
  background:
    linear-gradient(
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    url(${bgImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopContainer = styled.div`
width: 100%;
height: 100vh; //revisar
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;

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
    
  @media (min-width: 800px) { //desktop
    margin-left: 35rem;
    width: 26rem;
  }
}
`;

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
height: 100vh; //revisar

  @media (min-width: 600px) { //desktop
    flex-direction: row; 
    justify-content: space-between;
    padding: 0rem 3rem;
    text-align: start;
    margin: 0rem;
  }


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

/* espaço entre palavras */
.jump .space {
  animation: none;
  width: 0.2ch;
}

@keyframes jump {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-14px);
  }
}

/* ♿ acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .jump span {
    animation: none;
  }
}

  span{
    color:  ${({ theme }) => theme.purple};
    font-size: 0.8rem;

    @media (min-width: 600px) { //desktop
      font-size: 1.3rem;
      padding-left: 0.3rem ;
    } 
  }

  p{
    font-size: 0.6rem;
    max-width: 15rem;
    margin: 0;

    @media (min-width: 600px) { //desktop
      font-size: 1.1rem;
      max-width: 35rem;
      padding-left: 0.3rem ;
    } 
  }

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
    rgba(255, 255, 255, 1) 30%,
    rgba(250, 231, 255, 0.9) 60%,
    rgba(255, 255, 255, 0.21) 90%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; //revisar
    z-index: 1;
}

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

#secondContent{
    display: flex;
    gap: 1rem;
    position: relative;
    margin: 1rem;
    z-index: 2;

    @media (min-width: 600px) { //desktop
      flex-direction: column;
       gap: 2rem;
    }

    a{
      text-decoration: none;
    }

    i{
      background-color: ${({ theme }) => theme.purple};
      color:  ${({ theme }) => theme.white};
      font-size: 0.9rem;
      padding: 0.4rem;
      border-radius: 50px;
      transition: 1s all;

      &:hover{ //Effect
        color: ${({ theme }) => theme.purple};
        background-color: ${({ theme }) => theme.white};
      }

      @media (min-width: 600px) { //desktop
        font-size: 1.5rem;
        padding: 0.6rem;
      }
    }
}
`;

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

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const AboutContainer = styled.div`
width: 100%;
min-height: 100vh;
height: auto;
`;

export const AboutContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
text-align: center;
margin: 0.5rem;
padding: 1rem;

  @media (min-width: 600px) { //desktop
    margin: 2rem;
    padding: 1rem;
  }

p{
  @media (min-width: 600px) { //desktop
     max-width: 50%;
  }
}

.aboutImage{
  width: 20rem;
  margin: 1rem;
  padding: 0.7rem;
  border-radius: 1.3rem;

  @media (min-width: 600px) { //desktop
     width: 40rem;
  }
}
`;

export const LearnContainer = styled.div`
width: 100%;
min-height: 100vh;
height: auto;
`;

export const LearnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  width: 100%;
  overflow: hidden;

  p{
    @media (min-width: 600px) { //desktop
      max-width: 50%;
    }
    margin-bottom: 3rem;
  }

  .swiper {
    width: 100%;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

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
margin: 2.5rem 0rem;

div{
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.purple};;
  border-radius: 50%;

  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 22px;
    color: ${({ theme }) => theme.white};;
  }
}

  h3{
    font-size: 0.9rem;
  }
`;

export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: auto;

`;
