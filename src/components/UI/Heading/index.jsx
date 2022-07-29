import React from 'react'
import cls from './Heading.module.scss'

// Styled Component for displaying Heading
const Heading = ({title}) => {
  return (
    <div className={cls.title}>
      <h1>{title}</h1>
    </div>
  )
}

export default Heading
