import React from 'react'
import { Container, CardHeader, CardBody, CardFooter } from './styles'

function Card({ redes, name, fecha, follow, up, footer, contain, color }) {
  return (
    <>
      <Container className={contain}>
        <CardHeader>
          <img src={redes} alt="redes" />
          <p>{name}</p>
        </CardHeader>
        <CardBody>
          <h1>{fecha}</h1>
          <p>{follow}</p>
        </CardBody>
        <CardFooter>
          <img src={up} alt="up" />
          <p>{footer}</p>
        </CardFooter>
      </Container>
    </>
  )
}
export default Card
