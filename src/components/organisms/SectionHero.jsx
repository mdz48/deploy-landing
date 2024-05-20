import React from 'react'
import mysql from '../../data/mysql'
import Container from '../molecules/Container'
import './SectionHero.css'
import Top from '../molecules/Top'

function SectionHero() {
  return (
    <>
    <div id='container_hero'>
    {
                mysql.heroSection.map(content => {
                  return (
                    <>
                    <Container val={content.image} text={content.text} title={content.title}></Container>
                    </>
                  )
                })
        }
    </div>
    </>
  )
}


export default SectionHero