import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .border__facebook {
    border-top: 5px solid hsl(208, 92%, 53%);
  }
  .border__twitter {
    border-top: 5px solid hsl(203, 89%, 53%);
  }
  .border__instagram {
    border-top: 5px solid hsl(37, 70%, 53%);
  }
  .border__youtube {
    border-top: 5px solid hsl(348, 97%, 39%);
  }
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .card__followers {
      margin-bottom: 16px;
    }
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .card__followers {
      width: 90%;
    }
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    .card__followers {
      width: 100%;
    }
  }
`
export const Title = styled.h1`
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
  font-size: 2rem;
  margin: 30px 0;
  margin-left: 2%;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`
export const CardInfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .card__info {
      width: 90%;
    }
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    .card__info {
      width: 100%;
    }
  }
`
