import { styled } from 'styled-components'

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
    
  @media (min-width: 600px) { //desktop
    margin-left: 35rem;
    width: 30rem;
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
    justify-content: center;
    text-align: start;
    gap: 36rem;
    margin: 0rem;
  }

  h1{
    font-size: 2.2rem;
    color:  ${({ theme }) => theme.green};
    font-family: "Libre Baskerville", serif;

    @media (min-width: 600px) { //desktop
      font-size: 5rem;
    }
  }
  
  span{
    color:  ${({ theme }) => theme.green};
    font-size: 0.8rem;

    @media (min-width: 600px) { //desktop
      font-size: 1.3rem;
    } 
  }

  p{
    font-size: 0.6rem;
    max-width: 15rem;
    margin: 0;

    @media (min-width: 600px) { //desktop
      font-size: 1.1rem;
      max-width: 35rem;
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
    rgba(255, 255, 255, 0.9) 60%,
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
    }

    a{
      text-decoration: none;
    }

    i{
      background-color: ${({ theme }) => theme.green};
      color:  ${({ theme }) => theme.white};
      font-size: 0.9rem;
      padding: 0.4rem;
      border-radius: 50px;

      @media (min-width: 600px) { //desktop
        font-size: 1.5rem;
        padding: 0.6rem;
      }
    }
}
`;

export const Main = styled.main`
background-color: red;
margin: 0;
`;
