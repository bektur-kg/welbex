import React, {useCallback, useState} from 'react'
import cls from './Sort.module.scss'
import debounce from 'lodash.debounce'

import {conditions, sortTypes} from '../../../utils/sortSelect'

// Component for filtering data and searching them
const Sort = (
  {
    changePage,
    changeCondition,
    changeSearch,
    changeSort,
  }) => {
  const [inputValue, setInputValue] = useState('')

  const onSelectCondition = e => changeCondition(e.target.selectedOptions[0].value)
  const onSelectSort = e => changeSort(e.target.selectedOptions[0].value)

  const onChangeInput = e => {
    setInputValue(e.target.value)
    updateSearch(e.target.value)
    changePage(1)
  }

  // Updating incoming search value, when the local input wasn't updated for 500ms
  // Prevents requests on every value change
  const updateSearch = useCallback(debounce((value) => {
    changeSearch(value)
  }, 500),
  [])

  return (
    <div className={cls.root}>
      <div className={cls.search}>
        <input
          value={inputValue}
          onChange={onChangeInput}
          type="text"
          placeholder="Type something ..."
        />
      </div>
      <div className={cls.sortType}>
        <span>Sort by: </span>
        <select onChange={onSelectSort}>
          {
            sortTypes.map(type => (
              <option value={type.value} key={type.id}>{type.text}</option>
            ))
          }
        </select>
      </div>
      <div className={cls.condition}>
        <span>Condition: </span>
        <select onChange={onSelectCondition}>
          {
            conditions.map(item => (
              <option
                value={item.value}
                key={item.id}
              >
                {item.text}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default Sort
