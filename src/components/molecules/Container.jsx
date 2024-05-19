import React from 'react'
import Images from '../atoms/Images'
import Paragraphs from '../atoms/Paragraphs'
import './Container.css'

export default function Container(props) {
  return (

    <div id='container'>
        <div id="paint">
            <Images val={props.val}></Images>
        </div>
        <div id="container_written">
          <div id="title">
          <Paragraphs val={props.title}></Paragraphs>
          </div>
            <Paragraphs val={props.text}></Paragraphs>
        </div>
    </div>
  )
}
