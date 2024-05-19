import React from 'react'
import './Top.css'
import Paragraphs from '../atoms/Paragraphs'

export default function Top(props) {
  return (
    <div id='top_main'>
        <Paragraphs val={props.val}></Paragraphs>
    </div>
  )
}
