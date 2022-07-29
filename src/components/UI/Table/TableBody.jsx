import React from 'react'

// Component for displaying rows in tables
const TableBody = ({id, date, title, quantity, distance}) => {
  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {date}
      </td>
      <td>
        {title}
      </td>
      <td>
        {quantity}
      </td>
      <td>
        {distance}
      </td>
    </tr>
  )
}

export default TableBody
