import React from 'react'
import cls from './Error.module.scss'
import {BiErrorCircle} from 'react-icons/bi'

const Error = () => {
  return (
    <div className={cls.root}>
      <BiErrorCircle/>
      <h2>Something went wrong</h2>
    </div>
  )
}

export default Error
