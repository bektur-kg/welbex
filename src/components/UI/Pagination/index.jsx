import React from 'react'
import cls from './Pagination.module.scss'
import {GoTriangleLeft, GoTriangleRight} from 'react-icons/go'

// Component for paginating table
const Pagination = ({pages, currentPage, changePage}) => {

  const nexPage = () => changePage(prev => ++prev)
  const prevPage = () => changePage(prev => --prev)

  return (
    <ul className={cls.list}>
      <button
        className={cls.prev}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <GoTriangleLeft/>
      </button>
      {
        Array.from({length: pages}).map((_, i) => (
          <li
            key={i}
            className={currentPage === i + 1 ? cls.active : ''}
            onClick={() => changePage(i)}
          >{++i}</li>
        ),
        )
      }
      <button
        className={cls.next}
        onClick={nexPage}
        disabled={currentPage === pages}
      >
        <GoTriangleRight/>
      </button>
    </ul>
  )
}

export default Pagination
