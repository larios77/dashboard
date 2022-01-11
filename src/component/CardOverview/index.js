import React from 'react'
import { Container, CardSocial, CardFooter } from './styles'

function cardInfo({ view, redes, number, percentage, up, contain }) {
  return (
    <>
      <Container className={contain}>
        <CardSocial>
          <p>{view}</p>
          <img src={redes} alt="facebook" />
        </CardSocial>
        <CardFooter>
          <h1>{number}</h1>
          <div>
            <img src={up} alt="iconUp" />
            <p>{percentage}</p>
          </div>
        </CardFooter>
      </Container>
    </>
  )
}
export default cardInfo
