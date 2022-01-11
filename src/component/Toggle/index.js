import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Input, Label, Toggle } from './styles'

function ToggleButton({ onClick }) {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Container>
        <Label theme={theme}>Dark mode</Label>
        <Input onClick={onClick} type="checkbox" id="toggle"></Input>
        <Toggle htmlFor="toggle" theme={theme}></Toggle>
      </Container>
    </>
  )
}
export default ToggleButton
