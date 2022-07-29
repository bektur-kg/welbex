import React from 'react'
import cls from './Empty.module.scss'
import {ImFilesEmpty} from 'react-icons/im'

// Component for displaying empty
const EmptyData = ({text}) => {
  return (
    <div className={cls.root}>
      <ImFilesEmpty/>
      <p>{text}</p>
    </div>
  )
}

export default EmptyData