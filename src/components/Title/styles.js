import styled from "styled-components";

export const TitleContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin: 1rem 0rem;


.divider {
  position: relative;
  width: 80%;
  height: 5rem;
  margin: 1rem;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.01rem;
  background: ${({ theme }) => theme.purple};
  transform: translateY(-50%);
}

.divider i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.purple}; /* cobre a linha */
  color: ${({ theme }) => theme.white};
  font-size: 28px;

  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.jump span {
  display: inline-block;
  animation: jump 2.7s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
  color:  ${({ theme }) => theme.purple};
  font-family: 'Cabin Sketch', cursive;
}

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

`