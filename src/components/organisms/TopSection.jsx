import React from 'react'
import Top from '../molecules/Top'
import mysql from '../../data/mysql'

function TopSection() {
  return (
    <Top val={mysql.top}></Top>
  )
}

export default TopSection