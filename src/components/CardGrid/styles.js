import styled from "styled-components";

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  padding: 3.5rem 2rem 2rem;
  text-align: center;
  position: relative;
  border-radius: 4px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid ${({ theme }) => theme.purple};

  svg{
    fill: ${({ theme }) => theme.purple};
    font-size: 1.8rem;
  }
`;

export const Title = styled.p`
  font-size: 0.95rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;
