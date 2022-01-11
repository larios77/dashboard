import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto 16px auto;
    width: 85%;
    background: ${({ theme }) => theme.backgroundCard};
    border-radius: 4px;
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  :hover {
    background: ${({ theme }) => theme.backgroundCardHover};
  }
`
export const CardSocial = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    color: hsl(228, 12%, 44%);
    font-size: 0.9rem;
  }
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  h1 {
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  div {
    display: flex;
    align-items: center;
  }
  div p {
    margin-left: 4px;
    color: hsl(163, 72%, 41%);
    font-size: 0.9rem;
  }
`
