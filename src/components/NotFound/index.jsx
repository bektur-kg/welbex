import React from 'react'
import cls from './NotFound.module.scss'
import {useNavigate} from 'react-router-dom'

// Component for displaying Not Found route and navigating to main page
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <h1>404</h1>
        <p>Страница не найдена</p>
      </div>
      <div className={cls.back}>
        <button onClick={() => navigate('/')}>Назад</button>
      </div>
    </div>
  )
}

export default NotFound
