import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  margin: 10px auto;
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 4px;
  padding: 20px 0;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.backgroundCardHover};
  }
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 8px;
    font-size: 12px;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
`
export const CardBody = styled.div`
  text-align: center;
  h1 {
    font-size: 3.5rem;
    margin: 12px 0 2px 0;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  }
  p {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.7rem;
    color: hsl(228, 12%, 44%);
    margin-bottom: 20px;
  }
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: hsl(163, 72%, 41%);
    font-weight: bold;
    font-size: 0.8rem;
  }
  img {
    margin-right: 4px;
  }
`
