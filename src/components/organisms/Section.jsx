import React from 'react'
import Container from '../molecules/Container'
import Top from '../molecules/Top'
import './Section.css'
import '../../data/mysql'
import Card from '../molecules/Card'
import Bottom from '../molecules/Bottom'
import mysql from '../../data/mysql'

export default function Section() {
  return (
    <>
        <Top val={mysql.top}></Top>
        <div id="main_container">
        {
                mysql.heroSection.map(content => {
                  return (
                    <>
                    <Container val={content.image} text={content.text} title={content.title}></Container>
                    </>
                  )
                })
              }
            <div id="cards_container">
              {
                mysql.cards.map(content => {
                  return (
                    <>
                    <Card val={content.image} text={content.text} btn={content.btn} title={content.character}></Card>
                    </>
                  )
                })
              }
            </div>
        </div>
        <Bottom text={"SOY EL BOTTOM"}></Bottom>
    </>
  )
}
    