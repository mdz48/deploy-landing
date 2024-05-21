import React from 'react'
import Paragraphs from '../atoms/Paragraphs'

export default function Bottom(props) {
  return (
    <>
              <div id='bottom_columns'>  
              <Paragraphs val={props.text1}></Paragraphs>
              <Paragraphs val={props.text2}></Paragraphs>
              <Paragraphs val={props.text3}></Paragraphs>
              </div>

    </>
  )
}
