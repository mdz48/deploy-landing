import React from 'react'
import mysql from '../../data/mysql'
import './Bottom.css'
import Paragraphs from '../atoms/Paragraphs'

export default function Bottom() {
  return (
    <>
    <div id="bottom">
        {
          mysql.bottom.map(content => {
            return (
              <div id='bottom_columns'>  
              <Paragraphs val={content.text1}></Paragraphs>
              <Paragraphs val={content.text2}></Paragraphs>
              <Paragraphs val={content.text3}></Paragraphs>
              </div>
            )
          })
        }
    </div>
    </>
  )
}
