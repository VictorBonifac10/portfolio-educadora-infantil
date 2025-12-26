import styled from "styled-components";

//-----------------Container
export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
align-items: center;
gap: 3rem; 
margin: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;

//-----------------Card
export const Card = styled.div`
background-color: ${({ theme }) => theme.purple}; 
border-radius: 1rem;
overflow: hidden;
position: relative;
text-align: center;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
transition: transform 0.3s ease, box-shadow 0.3s ease;

  .imageWrapper {
    width: 100%;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  .iconWrapper {
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.purple};
    border-radius: 50%;
    position: absolute;
    top: 220px;    
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    svg {
      color: #fff;
      font-size: 22px;
    }
  }

  h3{
    color: #fff;
    padding: 1.5rem 2rem 0rem 2rem;
    font-size: 1.3rem;
  }

  p {
    color: #fff;
    font-size: 0.90rem;
    padding: 0.8rem;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;