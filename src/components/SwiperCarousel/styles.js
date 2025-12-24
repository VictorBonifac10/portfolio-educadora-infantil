import styled from 'styled-components';

//-----------------Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  width: 100%;
  overflow: hidden;

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

