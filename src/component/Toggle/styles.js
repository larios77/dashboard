import styled from 'styled-components'
const size = '1.5rem'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  display: none;
  &:checked {
    + label:before {
      background: hsl(227, 47%, 96%);
      left: calc(${size} + calc(${size} / 8));
    }
  }
`
export const Label = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;
  font-weight: 700;
`

export const Toggle = styled.label`
  background: ${({ theme }) => theme.toggle};
  border-radius: calc(${size} / 2);
  display: block;
  height: ${size};
  transition: all 0.3s;
  width: calc(${size} * 2);
  margin-left: 8px;
  cursor: pointer;
  &:before {
    content: '';
    background: hsl(228, 28%, 20%);
    border-radius: 50%;
    bottom: calc(${size} / 8);
    display: block;
    height: calc(${size} - calc(${size} / 4));
    left: calc(${size} / 8);
    position: relative;
    top: calc(${size} / 8);
    transition: all 0.3s;
    width: calc(${size} - calc(${size} / 4));
  }
`
