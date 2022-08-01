import React from 'react'
import cls from './Table.module.scss'
import TableBody from './TableBody'
import Loader from '../Loader'
import TableHead from './TableHead'
import EmptyData from '../../Empty'

// Component for displaying table with filtered and searched data
const Table = ({data, loading}) => {
  console.log(data)

  return (
    <table className={cls.root}>
      {
        loading ? (
          <thead>
            <tr>
              <th className={cls.loadingContainer}><Loader/></th>
            </tr>
          </thead>
        ) : !data.length ? (
          <thead>
            <tr>
              <th><EmptyData text={'no data found'}/></th>
            </tr>
          </thead>
        ) : (
          <>
            <TableHead data={data[0]}/>
            <tbody>
              {
                data.map(item => (
                  <TableBody
                    key={item.id}
                    date={item.date}
                    distance={item.distance}
                    quantity={item.quantity}
                    id={item.id}
                    title={item.title}
                  />
                ))
              }
            </tbody>
          </>
        )
      }
    </table>
  )
}

export default Table
