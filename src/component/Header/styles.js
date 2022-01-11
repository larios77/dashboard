import styled from 'styled-components'

export const Container = styled.header`
  width: 96%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 570px) {
    .darkmode {
      width: 100%;
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const TitleHeader = styled.h2`
  margin: 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
  }
`
export const TitleFollow = styled.span`
  margin: 0;
  color: hsl(228, 12%, 44%);
  font-weight: bold;
  margin-bottom: 16px;
`
