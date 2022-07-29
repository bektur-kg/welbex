import React, {useEffect, useState} from 'react'
import {Home} from '../index'
import cls from '../styles/Main.module.scss'
import Heading from '../../../components/UI/Heading'
import {filters} from '../../../utils/sortSelect'
import Error from '../../../components/Error'
import Sort from '../../../components/UI/Sort'
import Table from '../../../components/UI/Table'
import Pagination from '../../../components/UI/Pagination'

// Component for displaying Home page
const Main = () => {
  const {loading, data, error, actions} = Home.Hooks.Chat.use()

  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState('id')
  const [searchInput, setSearchInput] = useState('')
  const [conditionSort, setConditionSort] = useState('includes')

  const PAGE_SIZE = 5
  const TOTAL_PAGES = Math.ceil(data?.results.length / PAGE_SIZE)

  // Getting data with query parameters when sort states changed
  useEffect(() => {
    const route = 'table'
    const condition = `${filters[sortType][conditionSort]}=${searchInput}`

    const queries = `?ordering=${sortType}&${condition}`

    actions.get(route, queries)
  }, [sortType, conditionSort, searchInput])


  // Divides data for one table page
  // Should be pagination by backend, but backend is not ready
  const dataList = data?.results.slice(
    (currentPage - 1) * PAGE_SIZE,
    (currentPage - 1) * PAGE_SIZE + PAGE_SIZE,
  )

  return (
    <div className={cls.root}>
      {
        error ? (
          <Error/>
        ) : (
          <div className={cls.errorContainer}>
            <Heading title={'Restaurants Table'}/>
            <div className={cls.container}>
              <Sort
                changePage={setCurrentPage}
                changeSort={setSortType}
                changeSearch={setSearchInput}
                changeCondition={setConditionSort}
              />
              <Table data={dataList} loading={loading}/>
              <Pagination
                pages={TOTAL_PAGES}
                currentPage={currentPage}
                changePage={setCurrentPage}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Main




