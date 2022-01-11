import React from 'react'
import Card from '../CardFollowers/index'
import CardInfo from '../CardOverview/index'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import instagram from '../../images/icon-instagram.svg'
import youtube from '../../images/icon-youtube.svg'
import IconUp from '../../images/icon-up.svg'
import IconDown from '../../images/icon-down.svg'
import { Container, ContainerCard, Title, CardInfoContent } from './styles'

function Main() {
  return (
    <>
      <Container>
        <ContainerCard>
          <Card
            name="@nathanf"
            fecha={1987}
            follow="Followers"
            footer="12 Today"
            redes={facebook}
            up={IconUp}
            contain="border__facebook card__followers"
          />
          <Card
            name="@nathanf"
            fecha={1044}
            follow="Followers"
            footer="99 Today"
            redes={twitter}
            up={IconUp}
            contain="border__twitter card__followers"
          />
          <Card
            name="@realnathanf"
            fecha="11K"
            follow="Followers"
            footer="1099 Today"
            redes={instagram}
            up={IconUp}
            contain="border__instagram card__followers"
          />
          <Card
            name="Nathan F."
            fecha={8239}
            follow="Subscribers"
            footer="144 Today"
            redes={youtube}
            up={IconDown}
            contain="border__youtube card__followers "
          />
        </ContainerCard>
        <Title>Overview - Today</Title>
        <CardInfoContent>
          <CardInfo
            view="Page Views"
            redes={facebook}
            number={87}
            up={IconUp}
            percentage="3%"
            contain="card__info"
          />
          <CardInfo
            view="Likes"
            redes={facebook}
            number={52}
            up={IconDown}
            percentage="2%"
            contain="card__info"
          />
          <CardInfo
            view="Likes"
            redes={instagram}
            number={5462}
            up={IconUp}
            percentage="2257%"
            contain="card__info"
          />
          <CardInfo
            view="Profile Views"
            redes={instagram}
            number="52K"
            up={IconUp}
            percentage="1375%"
            contain="card__info"
          />
          <CardInfo
            view="Retweets"
            redes={twitter}
            number={117}
            up={IconUp}
            percentage="303%"
            contain="card__info"
          />
          <CardInfo
            view="Likes"
            redes={twitter}
            number={507}
            up={IconUp}
            percentage="553%"
            contain="card__info"
          />
          <CardInfo
            view="Likes"
            redes={youtube}
            number={107}
            up={IconDown}
            percentage="19%"
            contain="card__info"
          />
          <CardInfo
            view="Total Views"
            redes={youtube}
            number={1407}
            up={IconDown}
            percentage="12%"
            contain="card__info"
          />
        </CardInfoContent>
      </Container>
    </>
  )
}
export default Main
