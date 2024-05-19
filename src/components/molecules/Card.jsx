import React from 'react'
import './Card.css'
import Images from '../atoms/Images'
import Paragraphs from "../atoms/Paragraphs.jsx";
import Pulse from '../atoms/Pulse.jsx';

export default function Card(props) {
  return (
    <>
        <div id='card_container'>
            <div id="paint">
                <Images val={props.val}></Images>
            </div>
            <div id="card_written">
              <div id="card_title">
                <Paragraphs val={props.title}></Paragraphs>
              </div>
                <Paragraphs val={props.text}></Paragraphs>
            </div>
            <Pulse val={props.btn}></Pulse>
        </div>
    </>
  )
}
