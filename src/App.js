import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Styles/globalStyle'
import Header from './component/Header/index'
import Main from './component/Layout/index'
import { AppContext } from './store/index'

function App() {
  const { theme } = useContext(AppContext)
  return (
    <ThemeProvider theme={theme}>
      <div className="container__app">
        <GlobalStyles />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}
export default App
