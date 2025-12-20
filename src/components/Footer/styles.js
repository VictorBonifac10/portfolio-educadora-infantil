import styled from "styled-components";

export const ContainerFooter = styled.footer` //Footer
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0.5rem 2rem;
    margin-top: 40px;
    

    img{ //Logo
    width: 250px;
    }

    ul{ //Sections from Site 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;
    max-width: 300px;

    li{ //Sections from Site 
    a{
    color: ${({ theme }) => theme.green};
    text-decoration: none;

    &:hover{ //Effect
    color: ${({ theme }) => theme.green};
    border-bottom: 2px solid ${({ theme }) => theme.green};
    }
    }
    }
  }

    section{ //Icon Section
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a{
          text-decoration: none;
    }

    i{ //Icons
    color: white;
    background-color: ${({ theme }) => theme.green};
    padding: 0.5rem;
    border-radius: 50px;
    font-size: 20px;
    transition: 0.5s;
    cursor: pointer;
    transition: 1s all;

    &:hover{ //Effect
    color: ${({ theme }) => theme.green};;
    background-color: white;
    }
    }
  }

  .waves { //Animated Waves
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    z-index: 0;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;

    use{ //Animated Waves
    fill: rgba(102, 200, 130, 0.3);  
    }
}

    .content { //Animated Waves
    position: relative;
    height: 20vh;
    text-align: center;
    }

    .parallax>use { //Animated Waves
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }

    .parallax>use:nth-child(1) { //Animated Waves
    animation-delay: -2s;
    animation-duration: 7s;
    }

    .parallax>use:nth-child(2) { //Animated Waves
    animation-delay: -3s;
    animation-duration: 10s;
    }

    .parallax>use:nth-child(3) { //Animated Waves
    animation-delay: -4s;
    animation-duration: 13s;
    }

    @keyframes move-forever { //Animated Waves
    0% {
    transform: translate3d(-90px, 0, 0);
    }
    100% {
    transform: translate3d(85px, 0, 0);
    }
    }

    @media (max-width: 768px) { //Responsive
    .waves {
    height: 40px;
    min-height: 40px;
    }

    .content {
    height: 30vh;
    }

    h1 {
    font-size: 24px;
    }
  }
`;

export const Text = styled.div` //Atributtes
    max-width: 500px;
`;
