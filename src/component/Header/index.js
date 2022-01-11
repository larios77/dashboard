import React, { useContext } from 'react'
import ToggleDarkmode from '../Toggle/index'
import { Container, TitleHeader, TitleFollow } from './styles.js'
import { AppContext } from '../../store/index'
import { ThemeContext } from 'styled-components'

function Header() {
  const theme = useContext(ThemeContext)
  const { isDarkModeActive, disableDarkMode, activateDarkMode } =
    useContext(AppContext)
  const handleClickToogle = () => {
    isDarkModeActive ? disableDarkMode() : activateDarkMode()
  }
  return (
    <>
      <Container theme={theme}>
        <div>
          <TitleHeader>Social Media Dashboard</TitleHeader>
          <TitleFollow>Total Followers: 23,004</TitleFollow>
        </div>
        <div className="darkmode">
          <ToggleDarkmode onClick={handleClickToogle} />
        </div>
      </Container>
    </>
  )
}
export default Header
