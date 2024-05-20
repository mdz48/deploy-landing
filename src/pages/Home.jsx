import React from 'react'
import SectionHero from '../components/organisms/SectionHero'
import './Home.css'
import CardsSection from '../components/organisms/CardsSection'
import BottomSection from '../components/organisms/BottomSection'
import TopSection from '../components/organisms/TopSection'


export default function Home() {
  return (
    <>
      <TopSection></TopSection>
      <div id='main_content'>
      <SectionHero></SectionHero>
      <CardsSection></CardsSection>
      </div>
      <BottomSection></BottomSection>
    </>
  )
}
